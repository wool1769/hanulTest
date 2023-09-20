"use strict";
(() => {
var exports = {};
exports.id = 548;
exports.ids = [548];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 9821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fnotice_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fnotice_tsx_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/notice.tsx
var notice_namespaceObject = {};
__webpack_require__.r(notice_namespaceObject);
__webpack_require__.d(notice_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
;// CONCATENATED MODULE: ./src/pages/api/notice.tsx

const client = new client_.PrismaClient();
async function handler(req, res) {
    console.log("포스트");
    console.log(req.body);
    try {
        console.log(req.body);
        if (req.body.conid == "new") {
            console.log("새글");
            const newNotice = await client.post.create({
                data: {
                    title: req.body.title,
                    content: req.body.content,
                    date: new Date().toString()
                }
            });
            res.json(newNotice);
        } else {
            console.log("헌글");
            const newNotice = await client.post.update({
                where: {
                    id: req.body.conid
                },
                data: {
                    title: req.body.title,
                    content: req.body.content
                }
            });
            res.json(newNotice);
        }
        res.json("테스트중");
    } catch (error) {
        res.json({
            error: "서버 오류 발생"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fnotice&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fnotice.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fnotice_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fnotice_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(notice_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(notice_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/notice",
        pathname: "/api/notice",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: notice_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(9821)));
module.exports = __webpack_exports__;

})();