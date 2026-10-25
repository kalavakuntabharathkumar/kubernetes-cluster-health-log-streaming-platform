import { randomUUID } from "node:crypto";
import { ClusterSummary, LogEvent, LogLevel } from "./types";
const clusters: ClusterSummary[] = Array.from({length:3}, (_,i) => {
 const pods = Array.from({length:4}, (__,j) => ({name:`service-${j+1}-${i+1}ab${j}c`,namespace:["platform","payments","observability","default"][j],phase:(j===3&&i===1?"Pending":"Running") as "Running"|"Pending"|"Failed",restarts:j===2&&i===2?3:0,cpuMilli:80+i*25+j*15,memoryMiB:128+i*32+j*24}));
 return {id:`cluster-0${i+1}`,name:`demo-cluster-0${i+1}`,region:["ap-south-1","ap-southeast-1","eu-west-1"][i],status:(pods.some(p=>p.phase!=="Running"||p.restarts>2)?"degraded":"healthy") as "healthy"|"degraded",podCount:pods.length,pods};
});
const logs: LogEvent[] = [];
const archives: {id:string;createdAt:string;count:number;destination:string}[] = [];
export function listClusters(){return clusters.map(({pods,...summary})=>summary);}
export function getClusterHealth(id:string){return clusters.find(c=>c.id===id)??null;}
export function ingestLog(input:{clusterId:string;pod:string;level:LogLevel;message:string}){
 const event:LogEvent={id:randomUUID(),...input,timestamp:new Date().toISOString()}; logs.push(event); if(logs.length>5000) logs.shift(); return event;
}
export function recentLogs(limit=100){return logs.slice(-limit).reverse();}
export function createArchive(){const item={id:randomUUID(),createdAt:new Date().toISOString(),count:logs.length,destination:"demo://minio/diagnostics"};archives.push(item);return item;}
export function listArchives(){return [...archives].reverse();}
export function resetForTests(){logs.length=0;archives.length=0;}
