"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/write/[edit]/page",{

/***/ "(app-pages-browser)/./src/app/write/[edit]/page.tsx":
/*!***************************************!*\
  !*** ./src/app/write/[edit]/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Edit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Ckeditor = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_ckediter_editer_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/app/ckediter/editer */ \"(app-pages-browser)/./src/app/ckediter/editer.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"../app/write/[edit]/page.tsx -> \" + \"@/app/ckediter/editer\"\n        ]\n    },\n    loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading CKEditor...\"\n        }, void 0, false, {\n            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n            lineNumber: 10,\n            columnNumber: 20\n        }, undefined),\n    ssr: false\n});\n_c = Ckeditor;\nfunction Edit(props) {\n    _s();\n    const conId = props.params.edit;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const editorRef = useRef<Editor | null>(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (conId != \"new\") {\n            const url = \"/api/content?pageId=\".concat(conId);\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(url).then((response)=>{\n                setValue(response.data.title);\n                setDate(response.data.date);\n                setText(response.data.content);\n            });\n        }\n    }, []);\n    const [title, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    let date;\n    let [conDate, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    let nd;\n    if (conId == \"new\") {\n        nd = new Date();\n    } else {\n        nd = new Date(conDate);\n    }\n    const year = nd.getFullYear();\n    const month = String(nd.getMonth() + 1).padStart(2, \"0\");\n    const day = String(nd.getDate()).padStart(2, \"0\");\n    date = \"\".concat(year, \". \").concat(month, \". \").concat(day);\n    //로딩창 띄우기.. \n    const [lodingBool, setBool] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [consText, setText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const noticePost = async ()=>{\n        setBool(true);\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/notice\", {\n            conid: conId,\n            title: title,\n            content: consText\n        }).then((respone)=>{\n            setBool(false);\n            // console.log(respone.data.id);\n            router.push(\"/detail/\".concat(respone.data.id));\n        }).catch((error)=>console.log(error.data));\n    };\n    const handleChange = (e)=>{\n        setValue(e.target.value);\n    };\n    const textval = (e)=>{\n        setText(e);\n    };\n    // 로딩\n    let pLoding = lodingBool ? \"postLoding\" : \"blind\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrap\",\n        children: [\n            \"//로딩.. 화면 잠금\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"lodingBox\",\n                className: pLoding,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dot-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dot\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dot\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dot\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"detailtop\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"공지사항\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"제목을 입력하세요\",\n                                value: title,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: date\n                            }, void 0, false, {\n                                fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"editerBox\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ckeditor, {\n                            value: consText,\n                            onChange: textval\n                        }, void 0, false, {\n                            fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"detailBths\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>router.back(),\n                                children: \"취소\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: noticePost,\n                                children: \"저장\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hanul_kim/Documents/GitHub/hanulTest/src/app/write/[edit]/page.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n}\n_s(Edit, \"LO4PG18OtuHFOZ4dl7seGObs+lE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c1 = Edit;\nvar _c, _c1;\n$RefreshReg$(_c, \"Ckeditor\");\n$RefreshReg$(_c1, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd3JpdGUvW2VkaXRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ2tCO0FBQ3dCO0FBRWpDO0FBRW5DLE1BQU1LLFdBQVdELG1EQUFPQSxDQUFDLElBQUksMk5BQU87Ozs7OztJQUNoQ0UsU0FBUyxrQkFBTSw4REFBQ0M7c0JBQUU7Ozs7OztJQUNsQkMsS0FBSzs7S0FGSEg7QUFPUyxTQUFTSSxLQUFLQyxLQUFxQzs7SUFDOUQsTUFBTUMsUUFBUUQsTUFBTUUsTUFBTSxDQUFDQyxJQUFJO0lBQy9CLE1BQU1DLFNBQVNiLDBEQUFTQTtJQUN4QixpREFBaUQ7SUFHakRDLGdEQUFTQSxDQUFDO1FBQ04sSUFBR1MsU0FBUyxPQUFNO1lBQ1YsTUFBTUksTUFBTSx1QkFBNkIsT0FBTko7WUFDbkNYLDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUFDRCxLQUFLRSxJQUFJLENBQUNDLENBQUFBO2dCQUNoQkMsU0FBU0QsU0FBU0UsSUFBSSxDQUFDQyxLQUFLO2dCQUM1QkMsUUFBUUosU0FBU0UsSUFBSSxDQUFDRyxJQUFJO2dCQUMxQkMsUUFBUU4sU0FBU0UsSUFBSSxDQUFDSyxPQUFPO1lBQ2pDO1FBQ1I7SUFDQSxHQUFHLEVBQUU7SUFHVCxNQUFNLENBQUNKLE9BQU9GLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLElBQUlvQjtJQUNKLElBQUksQ0FBQ0csU0FBU0osUUFBUSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFbEMsSUFBSXdCO0lBQ0osSUFBR2hCLFNBQU8sT0FBTTtRQUNaZ0IsS0FBSyxJQUFJQztJQUNiLE9BQUs7UUFDREQsS0FBSyxJQUFJQyxLQUFLRjtJQUNsQjtJQUVBLE1BQU1HLE9BQU9GLEdBQUdHLFdBQVc7SUFDM0IsTUFBTUMsUUFBUUMsT0FBT0wsR0FBR00sUUFBUSxLQUFLLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO0lBQ3BELE1BQU1DLE1BQU1ILE9BQU9MLEdBQUdTLE9BQU8sSUFBSUYsUUFBUSxDQUFDLEdBQUc7SUFFN0NYLE9BQU8sR0FBWVEsT0FBVEYsTUFBSyxNQUFjTSxPQUFWSixPQUFNLE1BQVEsT0FBSkk7SUFHaEMsWUFBWTtJQUNULE1BQU0sQ0FBQ0UsWUFBYUMsUUFBUSxHQUFHbkMsK0NBQVFBLENBQUM7SUFDeEMsTUFBTSxDQUFDb0MsVUFBVWYsUUFBUSxHQUFHckIsK0NBQVFBLENBQUM7SUFDckMsTUFBTXFDLGFBQWE7UUFDZkYsUUFBUTtRQUNSLE1BQU10Qyw2Q0FBS0EsQ0FBQ3lDLElBQUksQ0FBQyxlQUFjO1lBQzNCQyxPQUFRL0I7WUFDUlUsT0FBUUE7WUFDUkksU0FBVWM7UUFDZCxHQUFHdEIsSUFBSSxDQUFDMEIsQ0FBQUE7WUFDSkwsUUFBUTtZQUNSLGdDQUFnQztZQUNoQ3hCLE9BQU84QixJQUFJLENBQUMsV0FBMkIsT0FBaEJELFFBQVF2QixJQUFJLENBQUN5QixFQUFFO1FBQzFDLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBUUMsUUFBUUMsR0FBRyxDQUFDRixNQUFNM0IsSUFBSTtJQUNyQztJQUNBLE1BQU04QixlQUFlLENBQUNDO1FBQ2xCaEMsU0FBU2dDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUMzQjtJQUVBLE1BQU1DLFVBQVMsQ0FBQ0g7UUFDWjNCLFFBQVEyQjtJQUNaO0lBRUEsS0FBSztJQUVMLElBQUlJLFVBQVdsQixhQUFhLGVBQWU7SUFFL0MscUJBQ0ksOERBQUNtQjtRQUFJQyxXQUFVOztZQUFPOzBCQUdsQiw4REFBQ0Q7Z0JBQUlYLElBQUc7Z0JBQVlZLFdBQWFGOzBCQUM3Qiw0RUFBQ0M7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs7Ozs7O3NDQUNmLDhEQUFDRDs0QkFBSUMsV0FBVTs7Ozs7O3NDQUNmLDhEQUFDRDs0QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXZCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQVNDLGFBQVk7Z0NBQVlQLE9BQU9oQztnQ0FBT3dDLFVBQVVYOzs7Ozs7MENBQzFELDhEQUFDM0M7MENBQUdnQjs7Ozs7Ozs7Ozs7O2tDQUVSLDhEQUFDaUM7d0JBQUlDLFdBQVU7a0NBRVgsNEVBQUNwRDs0QkFBU2dELE9BQVFkOzRCQUFVc0IsVUFBVVA7Ozs7Ozs7Ozs7O2tDQUkxQyw4REFBQ0U7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FBT0MsU0FBUyxJQUFJakQsT0FBT2tELElBQUk7MENBQUk7Ozs7OzswQ0FDcEMsOERBQUNGO2dDQUFPQyxTQUFTdkI7MENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRDtHQS9Gd0IvQjs7UUFFTFIsc0RBQVNBOzs7TUFGSlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC93cml0ZS9bZWRpdF0vcGFnZS50c3g/ZWJjOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5jb25zdCBDa2VkaXRvciA9IGR5bmFtaWMoKCk9PmltcG9ydCgnQC9hcHAvY2tlZGl0ZXIvZWRpdGVyJykse1xuICAgIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgQ0tFZGl0b3IuLi48L3A+LFxuICAgIHNzcjogZmFsc2UsIFxufSlcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQocHJvcHM6IHsgcGFyYW1zOiB7IGVkaXQ6IHN0cmluZzsgfTsgfSl7XG4gICAgY29uc3QgY29uSWQgPSBwcm9wcy5wYXJhbXMuZWRpdFxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgLy8gY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmPEVkaXRvciB8IG51bGw+KG51bGwpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihjb25JZCAhPSBcIm5ld1wiKXsgLy/sg4jquIAg7J6R7ISx7J20IOyVhOuLkCDqsr3smrAg7IiY7KCV7ZWgIOuNsOydtO2EsCDsmpTssq0gXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYC9hcGkvY29udGVudD9wYWdlSWQ9JHtjb25JZH1gO1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShyZXNwb25zZS5kYXRhLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICBzZXREYXRlKHJlc3BvbnNlLmRhdGEuZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGV4dChyZXNwb25zZS5kYXRhLmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgfSwgW10pO1xuXG5cbiAgICBjb25zdCBbdGl0bGUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGxldCBkYXRlO1xuICAgIGxldCBbY29uRGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgbGV0IG5kO1xuICAgIGlmKGNvbklkPT1cIm5ld1wiKXsgIC8v7IOI6riAICwg7IiY7KCVIOq1rOu2hFxuICAgICAgICBuZCA9IG5ldyBEYXRlKCk7IFxuICAgIH1lbHNle1xuICAgICAgICBuZCA9IG5ldyBEYXRlKGNvbkRhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHllYXIgPSBuZC5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKG5kLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IGRheSA9IFN0cmluZyhuZC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7IFxuXG4gICAgZGF0ZSA9IGAke3llYXJ9LiAke21vbnRofS4gJHtkYXl9YFxuXG5cbiAvL+uhnOuUqeywvSDrnYTsmrDquLAuLiBcbiAgICBjb25zdCBbbG9kaW5nQm9vbCAsIHNldEJvb2xdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2NvbnNUZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpOyBcbiAgICBjb25zdCBub3RpY2VQb3N0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRCb29sKHRydWUpXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbm90aWNlJyx7XG4gICAgICAgICAgICBjb25pZCA6IGNvbklkLFxuICAgICAgICAgICAgdGl0bGUgOiB0aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQgOiBjb25zVGV4dFxuICAgICAgICB9KS50aGVuKHJlc3BvbmU9PntcbiAgICAgICAgICAgIHNldEJvb2woZmFsc2UpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25lLmRhdGEuaWQpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9kZXRhaWwvJHtyZXNwb25lLmRhdGEuaWR9YClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yPT4oY29uc29sZS5sb2coZXJyb3IuZGF0YSkpKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgY29uc3QgdGV4dHZhbCA9KGU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz4pPT57XG4gICAgICAgICAgICBzZXRUZXh0KGUpXG4gICAgICAgIH1cblxuICAgICAgICAvLyDroZzrlKlcblxuICAgICAgICBsZXQgcExvZGluZyA9ICBsb2RpbmdCb29sID8gXCJwb3N0TG9kaW5nXCIgOiBcImJsaW5kXCJcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXAnPlxuXG4vL+uhnOuUqS4uIO2ZlOuptCDsnqDquIggXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9kaW5nQm94XCIgY2xhc3NOYW1lID0ge3BMb2Rpbmd9PiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5uZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXRhaWx0b3AnPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+6rO17KeA7IKs7ZWtPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPSfsoJzrqqnsnYQg7J6F66Cl7ZWY7IS47JqUJyB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlZGl0ZXJCb3gnPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDa2VkaXRvciB2YWx1ZSA9e2NvbnNUZXh0fSBvbkNoYW5nZT17dGV4dHZhbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlsQnRocyc+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnJvdXRlci5iYWNrKCl9Puy3qOyGjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25vdGljZVBvc3R9PuyggOyepTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImR5bmFtaWMiLCJDa2VkaXRvciIsImxvYWRpbmciLCJwIiwic3NyIiwiRWRpdCIsInByb3BzIiwiY29uSWQiLCJwYXJhbXMiLCJlZGl0Iiwicm91dGVyIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwic2V0VmFsdWUiLCJkYXRhIiwidGl0bGUiLCJzZXREYXRlIiwiZGF0ZSIsInNldFRleHQiLCJjb250ZW50IiwiY29uRGF0ZSIsIm5kIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImRheSIsImdldERhdGUiLCJsb2RpbmdCb29sIiwic2V0Qm9vbCIsImNvbnNUZXh0Iiwibm90aWNlUG9zdCIsInBvc3QiLCJjb25pZCIsInJlc3BvbmUiLCJwdXNoIiwiaWQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHR2YWwiLCJwTG9kaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/write/[edit]/page.tsx\n"));

/***/ })

});