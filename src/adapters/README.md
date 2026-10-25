# Integration plan (not active in this demo)
- Kubernetes: @kubernetes/client-node with read-only service account, explicit deadlines and namespace allowlists.
- Kafka: kafkajs producer/consumer, idempotency, bounded retries and dead-letter topic.
- Loki: HTTP query API, labels and redaction of secrets.
- MongoDB: diagnostic metadata and event indexes.
- MinIO/S3: compressed/encrypted archives with retention policies.
- Redis: short-lived health cache with TTL and invalidation.
- WebSocket streaming is active locally; production needs auth and client backpressure.
