// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { describe, it, assert, beforeEach } from "vitest";
import { SpanKind, SpanStatusCode } from "@opentelemetry/api";
import { TestClient, tracingClientAttributes } from "../../public/util/testClient.js";
import { inMemoryExporter } from "../../public/util/setup.js";

describe("instrumentation end-to-end tests", () => {
  beforeEach(() => {
    inMemoryExporter.reset();
  });

  // This is node-only since we use the BasicTracerProvider in the browser
  // which does not set up a context manager. Alternatively we can always pull in
  // @opentelemetry/sdk-trace-web but it did not feel necessary at this time.
  describe("with a configured client", () => {
    it("works when using withSpan", async () => {
      await new TestClient().exampleOperation();
      const spans = inMemoryExporter.getFinishedSpans();
      assert.lengthOf(spans, 3);
      const [coreRestPipeline, inner, outer] = spans;

      // Check parenting chain
      assert.equal(coreRestPipeline.parentSpanId, inner.spanContext().spanId);
      assert.equal(inner.parentSpanId, outer.spanContext().spanId);
      assert.notExists(outer.parentSpanId);

      // Check default span kind
      assert.equal(outer.kind, SpanKind.INTERNAL);

      // Check specified span kind
      assert.equal(inner.kind, SpanKind.CLIENT);

      // Check status
      // https://github.com/Azure/azure-sdk-for-js/pull/32018 changed from OK to UNSET as per spec https://opentelemetry.io/docs/specs/semconv/http/http-spans/#status
      assert.deepEqual(coreRestPipeline.status, { code: SpanStatusCode.UNSET });
      assert.deepEqual(inner.status, { code: SpanStatusCode.OK });
      assert.deepEqual(outer.status, { code: SpanStatusCode.OK });

      // Check instrumentationLibrary
      assert.equal(outer.instrumentationLibrary.name, tracingClientAttributes.packageName);
      assert.equal(outer.instrumentationLibrary.version, tracingClientAttributes.packageVersion);

      // Check attributes on all spans
      assert.equal(coreRestPipeline.attributes["az.namespace"], tracingClientAttributes.namespace);
      assert.equal(inner.attributes["az.namespace"], tracingClientAttributes.namespace);
      assert.equal(outer.attributes["az.namespace"], tracingClientAttributes.namespace);
    });
  });
});
