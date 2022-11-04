import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./features/home/App";
import "./styles.less";

const root = createRoot(document.getElementById("app"));
const app = createElement(App);
const strictMode = createElement(StrictMode, undefined, app);
root.render(strictMode);
