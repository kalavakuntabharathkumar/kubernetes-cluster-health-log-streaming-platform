# Kubernetes Cluster Health and Log Streaming Platform

Runnable TypeScript/Express starter for sample Kubernetes health snapshots, log ingestion, WebSocket streaming, and diagnostic archive manifests.

## Run
Requires Node.js 20+.
```bash
npm install
cp .env.example .env
npm run dev
```
API: http://localhost:3001 | WebSocket: ws://localhost:3001/ws

## Endpoints
- GET /health
- GET /clusters
- GET /clusters/:clusterId/health
- POST /logs
- GET /logs/recent
- POST /diagnostics/archive
- GET /diagnostics/archive

Example:
```bash
curl -X POST http://localhost:3001/logs -H 'content-type: application/json' -d '{"clusterId":"cluster-01","pod":"payments-1","level":"warn","message":"Readiness probe failed"}'
```

The default implementation uses deterministic sample data and in-memory storage. Kubernetes client-node, Kafka, Loki, MongoDB, Redis and MinIO/S3 are documented extension points, not active integrations. Add authentication, authorization, backpressure, durable queues and secret management before production use.
