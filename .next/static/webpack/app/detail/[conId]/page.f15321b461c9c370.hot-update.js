"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/detail/[conId]/page",{

/***/ "(app-pages-browser)/./src/app/detail/[conId]/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/detail/[conId]/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Detailpage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Detailpage(props) {\n    _s();\n    const conId = props.params.conId;\n    const [content, setcon] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [date, setdate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        //페이지 로드시 내용 요청\n        const url = \"/api/content?pageId=\".concat(conId);\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(url).then((response)=>{\n            setcon(response.data);\n            let contTime = new Date(response.data.date);\n            const year = contTime.getFullYear();\n            const month = String(contTime.getMonth() + 1).padStart(2, \"0\");\n            const day = String(contTime.getDate()).padStart(2, \"0\");\n            setdate(\"\".concat(year, \". \").concat(month, \". \").concat(day));\n        });\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    const condelete = ()=>{\n        if (confirm(\"정말 삭제하시겠습니까?\")) {\n            const url = \"/api/content?pageId=\".concat(conId);\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(url).then((response)=>{\n                router.push(\"/list/1\") // 삭제 완료 후 리스트 1페이지로 이동\n                ;\n            });\n        }\n    };\n    const conPut = ()=>{\n        //수정 버튼 누를 시 작성페이지로 이동 \n        router.push(\"/write/\".concat(conId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrap\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inner\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detailtop\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"공지사항\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: content.title\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: date\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detailContentBox\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: content.content\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detailBths\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>router.push(\"/list/1\"),\n                            children: \"목록으로\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: conPut,\n                            children: \"수정\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: condelete,\n                            children: \"삭제\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/detail/[conId]/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(Detailpage, \"Xi1mxCHXad5ICCvwTg3A4IPpNME=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Detailpage;\nvar _c;\n$RefreshReg$(_c, \"Detailpage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGV0YWlsL1tjb25JZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ21CO0FBQ0Q7QUFPN0IsU0FBU0ksV0FBV0MsS0FBbUM7O0lBQ2xFLE1BQU1DLFFBQVFELE1BQU1FLE1BQU0sQ0FBQ0QsS0FBSztJQUNoQyxNQUFNLENBQUNFLFNBQVNDLE9BQU8sR0FBR04sK0NBQVFBLENBQWM7UUFBQ08sT0FBTztRQUFJRixTQUFTO0lBQUU7SUFDdkUsTUFBTUcsU0FBU1YsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVqQ0QsZ0RBQVNBLENBQUM7UUFDRixlQUFlO1FBQ2YsTUFBTVksTUFBTSx1QkFBNkIsT0FBTlI7UUFDbkNOLDZDQUFLQSxDQUFDZSxHQUFHLENBQUNELEtBQUtFLElBQUksQ0FBQ0MsQ0FBQUE7WUFDaEJSLE9BQU9RLFNBQVNDLElBQUk7WUFDcEIsSUFBSUMsV0FBVyxJQUFJQyxLQUFLSCxTQUFTQyxJQUFJLENBQUNOLElBQUk7WUFDMUMsTUFBTVMsT0FBT0YsU0FBU0csV0FBVztZQUNqQyxNQUFNQyxRQUFRQyxPQUFPTCxTQUFTTSxRQUFRLEtBQUssR0FBR0MsUUFBUSxDQUFDLEdBQUc7WUFDMUQsTUFBTUMsTUFBTUgsT0FBT0wsU0FBU1MsT0FBTyxJQUFJRixRQUFRLENBQUMsR0FBRztZQUNuRGIsUUFBUSxHQUFZVSxPQUFURixNQUFLLE1BQWNNLE9BQVZKLE9BQU0sTUFBUSxPQUFKSTtRQUNsQztJQUNKLHVEQUF1RDtJQUN2RCxHQUFHLEVBQUU7SUFFTCxNQUFNRSxZQUFXO1FBQ2IsSUFBR0MsUUFBUSxpQkFBZ0I7WUFDbkIsTUFBTWhCLE1BQU0sdUJBQTZCLE9BQU5SO1lBQ25DTiw2Q0FBS0EsQ0FBQytCLE1BQU0sQ0FBQ2pCLEtBQUtFLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQ25CTixPQUFPcUIsSUFBSSxDQUFDLFdBQVUsdUJBQXVCOztZQUNqRDtRQUNSO0lBQ0o7SUFFQSxNQUFNQyxTQUFRO1FBQ1YsdUJBQXVCO1FBQ3ZCdEIsT0FBT3FCLElBQUksQ0FBQyxVQUFnQixPQUFOMUI7SUFDMUI7SUFFSixxQkFDSSw4REFBQzRCO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUVYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDO3NDQUFJN0IsUUFBUUUsS0FBSzs7Ozs7O3NDQUNsQiw4REFBQzRCO3NDQUFHMUI7Ozs7Ozs7Ozs7Ozs4QkFFUiw4REFBQ3NCO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBSUsseUJBQXlCOzRCQUFFQyxRQUFRaEMsUUFBUUEsT0FBTzt3QkFBQzs7Ozs7Ozs7Ozs7OEJBSTVELDhEQUFDMEI7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDTTs0QkFBT0MsU0FBUyxJQUFJL0IsT0FBT3FCLElBQUksQ0FBQztzQ0FBWTs7Ozs7O3NDQUM3Qyw4REFBQ1M7NEJBQU9DLFNBQVNUO3NDQUFROzs7Ozs7c0NBQ3pCLDhEQUFDUTs0QkFBT0MsU0FBU2I7c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hEO0dBMUR3QnpCOztRQUdMSCxzREFBU0E7OztLQUhKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2RldGFpbC9bY29uSWRdL3BhZ2UudHN4PzUyZjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyAgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgQ29udGVudERhdGF7XG4gICAgdGl0bGUgOiBzdHJpbmcsXG4gICAgY29udGVudCA6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxwYWdlKHByb3BzOiB7IHBhcmFtczogeyBjb25JZDogYW55OyB9OyB9KXtcbiAgICBjb25zdCBjb25JZCA9IHByb3BzLnBhcmFtcy5jb25JZFxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRjb25dID0gdXNlU3RhdGU8Q29udGVudERhdGE+KHt0aXRsZTogXCJcIiwgY29udGVudDogXCJcIn0pXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbZGF0ZSwgc2V0ZGF0ZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIC8v7Y6Y7J207KeAIOuhnOuTnOyLnCDrgrTsmqkg7JqU7LKtXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgL2FwaS9jb250ZW50P3BhZ2VJZD0ke2NvbklkfWA7XG4gICAgICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRjb24ocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICBsZXQgY29udFRpbWUgPSBuZXcgRGF0ZShyZXNwb25zZS5kYXRhLmRhdGUpXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IGNvbnRUaW1lLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcoY29udFRpbWUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGNvbnRUaW1lLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTsgXG4gICAgICAgICAgICAgICAgc2V0ZGF0ZShgJHt5ZWFyfS4gJHttb250aH0uICR7ZGF5fWApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgY29uc3QgY29uZGVsZXRlID0oKT0+e1xuICAgICAgICAgICAgaWYoY29uZmlybShcIuygleunkCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIpKXsvL+yCreygnCDtmZXsnbhcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYC9hcGkvY29udGVudD9wYWdlSWQ9JHtjb25JZH1gO1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUodXJsKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbGlzdC8xJykvLyDsgq3soJwg7JmE66OMIO2bhCDrpqzsiqTtirggMe2OmOydtOyngOuhnCDsnbTrj5lcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25QdXQgPSgpPT57XG4gICAgICAgICAgICAvL+yImOyglSDrsoTtirwg64iE66W8IOyLnCDsnpHshLHtjpjsnbTsp4DroZwg7J2064+ZIFxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC93cml0ZS8ke2NvbklkfWApXG4gICAgICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHRvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+6rO17KeA7IKs7ZWtPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntjb250ZW50LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPntkYXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbENvbnRlbnRCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQuY29udGVudCB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxCdGhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnJvdXRlci5wdXNoKFwiL2xpc3QvMVwiKX0+66qp66Gd7Jy866GcPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29uUHV0fT7siJjsoJU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25kZWxldGV9PuyCreygnDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEZXRhaWxwYWdlIiwicHJvcHMiLCJjb25JZCIsInBhcmFtcyIsImNvbnRlbnQiLCJzZXRjb24iLCJ0aXRsZSIsInJvdXRlciIsImRhdGUiLCJzZXRkYXRlIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnRUaW1lIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImRheSIsImdldERhdGUiLCJjb25kZWxldGUiLCJjb25maXJtIiwiZGVsZXRlIiwicHVzaCIsImNvblB1dCIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiaDMiLCJwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/detail/[conId]/page.tsx\n"));

/***/ })

});