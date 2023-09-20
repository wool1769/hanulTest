"use strict";
(() => {
var exports = {};
exports.id = 325;
exports.ids = [325];
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

/***/ 6696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fcontent_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcontent_tsx_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/content.tsx
var content_namespaceObject = {};
__webpack_require__.r(content_namespaceObject);
__webpack_require__.d(content_namespaceObject, {
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
;// CONCATENATED MODULE: ./src/pages/api/content.tsx

const client = new client_.PrismaClient();
async function handler(req, res) {
    const pnum = parseInt(req.query.pagenum);
    const skipnum = (pnum - 1) * 10;
    if (req.method === "POST") {
        res.json(req.headers.host);
    }
    if (req.method === "GET") {
        if (req.query.pagenum != null && req.query.search == "undefined") {
            const totalcont = await client.post.count();
            const posts = await client.post.findMany({
                orderBy: {
                    id: "desc"
                },
                take: 10,
                skip: skipnum
            });
            res.json({
                datacount: totalcont,
                content: posts
            });
        }
        if (req.query.pagenum != null && req.query.search != "undefined") {
            // console.log("??")
            // console.log(req.query.search)
            const totalcont = await client.post.count({
                where: {
                    OR: [
                        {
                            title: {
                                contains: req.query.search
                            }
                        },
                        {
                            content: {
                                contains: req.query.search
                            }
                        }
                    ]
                }
            });
            const posts = await client.post.findMany({
                where: {
                    OR: [
                        {
                            title: {
                                contains: req.query.search
                            }
                        },
                        {
                            content: {
                                contains: req.query.search
                            }
                        }
                    ]
                },
                orderBy: {
                    id: "desc"
                },
                take: 10,
                skip: skipnum
            });
            res.json({
                datacount: totalcont,
                content: posts
            });
        }
        if (req.query.pageId != null && req.query.search == null) {
            const post = await client.post.findUnique({
                where: {
                    id: req.query.pageId
                }
            });
            res.json(post);
        }
    }
    if (req.method === "DELETE") {
        const del = await client.post.delete({
            where: {
                id: req.query.pageId
            }
        });
        res.json("ok");
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcontent&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fcontent.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fcontent_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcontent_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(content_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(content_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/content",
        pathname: "/api/content",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: content_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(6696)));
module.exports = __webpack_exports__;

})();