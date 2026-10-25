export type LogLevel = "debug" | "info" | "warn" | "error";
export interface PodSummary { name: string; namespace: string; phase: "Running" | "Pending" | "Failed"; restarts: number; cpuMilli: number; memoryMiB: number; }
export interface ClusterSummary { id: string; name: string; region: string; status: "healthy" | "degraded"; podCount: number; pods: PodSummary[]; }
export interface LogEvent { id: string; clusterId: string; pod: string; level: LogLevel; message: string; timestamp: string; }
