import {getClusterHealth,ingestLog,listClusters,recentLogs,resetForTests} from "../src/service";
beforeEach(()=>resetForTests());
describe("cluster service",()=>{
 it("returns sample cluster inventory",()=>expect(listClusters().length).toBeGreaterThan(0));
 it("returns null for unknown cluster",()=>expect(getClusterHealth("missing")).toBeNull());
 it("returns newest log first",()=>{ingestLog({clusterId:"cluster-01",pod:"api",level:"info",message:"started"});ingestLog({clusterId:"cluster-01",pod:"api",level:"error",message:"failed"});expect(recentLogs(1)[0].message).toBe("failed");});
});
