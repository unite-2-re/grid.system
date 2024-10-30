// @ts-ignore /* @vite-ignore */
import {subscribe, makeReactive, makeObjectAssignable} from "/externals/lib/object.js";

// @ts-ignore /* @vite-ignore */
import orient from "/externals/core/core.js"; await orient();

// @ts-ignore /* @vite-ignore */
import init from "/externals/core/grid.js"; await init();

//
import {inflectInGrid} from "../dist/grid-system.js";

//
const page = {
    layout: [4, 8],
    size: [0, 0],
    list: ["github", "youtube", "settings"]
};

//
const items = makeReactive(new Set([
    makeObjectAssignable(makeReactive({
        id: "github",
        name: "GitHub",
        cell: makeObjectAssignable(makeReactive([0, 0]))
    })),
    makeObjectAssignable(makeReactive({
        id: "youtube",
        name: "YouTube",
        cell: makeObjectAssignable(makeReactive([1, 0]))
    })),
    makeObjectAssignable(makeReactive({
        id: "settings",
        name: "Settings",
        cell: makeObjectAssignable(makeReactive([2, 0]))
    }))
]));

//
document.addEventListener("u2-item-added", (ev)=>{
    const element = ev.target;
    element.insertAdjacentHTML("beforeend", `<div class="u2-test-handler"></div>`);
    console.log(element);
});

//
const gridSystem = document.querySelector("u-gridbox");

//
inflectInGrid(gridSystem, items, page);
