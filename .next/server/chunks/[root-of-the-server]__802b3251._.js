module.exports = {

"[project]/.next-internal/server/app/api/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/data.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"questions\":[{\"question\":\"Which image best matches your hair loss?\",\"type\":\"ChoiceType\",\"options\":[{\"display\":\"<img alt=\\\"Temples\\\" src=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png\\\" srcset=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x\\\" />\",\"value\":\"Temples\",\"isRejection\":false},{\"display\":\"<img alt=\\\"Temples & Crown\\\" src=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png\\\" srcset=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402 x.png 2x\\\"/>\",\"value\":\"Temples & Crown\",\"isRejection\":false},{\"display\":\"<img alt=\\\"Patchy\\\" src=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png\\\" srcset=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x\\\"/>\",\"value\":\"Patchy\",\"isRejection\":true},{\"display\":\"<img alt=\\\"Moderate\\\" src=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png\\\" srcset=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.pn g 2x\\\" />\",\"value\":\"Moderate\",\"isRejection\":false},{\"display\":\"<img alt=\\\"Extensive\\\" src=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png\\\" srcset=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.pn g 2x\\\"/>\",\"value\":\"Extensive\",\"isRejection\":true},{\"display\":\"<img alt=\\\"Complete\\\" src=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png\\\" srcset=\\\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.pn g 2x\\\" />\",\"value\":\"Complete\",\"isRejection\":true}]},{\"question\":\"Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?\",\"type\":\"ChoiceType\",\"options\":[{\"display\":\"Yes\",\"value\":true,\"isRejection\":true},{\"display\":\"No\",\"value\":false,\"isRejection\":false}]},{\"question\":\"Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?\",\"type\":\"ChoiceType\",\"options\":[{\"display\":\"Yes\",\"value\":true,\"isRejection\":true},{\"display\":\"No\",\"value\":false,\"isRejection\":false}]}]}"));}}),
"[project]/app/api/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/api/data.json (json)");
;
async function GET() {
    try {
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        return new Response(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$data$2e$json__$28$json$29$__["default"]));
    } catch (error) {
        console.error('Error fetching data:', error);
        return new Response(JSON.stringify({
            error: 'Failed to fetch data'
        }), {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__802b3251._.js.map