import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plgins/unpkg-path-plugin";
import { fetchPlugin } from "./plgins/fetch-plugin";

let service: esbuild.Service;

const func = async (rawCode: string) => {
  if (!service) {
    service = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  }
  try {
    const result = await service.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      define: {
        "process.env.NODE_ENV": "'production'",
        global: "window",
      },
      jsxFactory: "_React.createElement",
      jsxFragment: "_React.Fragment",
    });
    return { code: result.outputFiles[0].text, err: "" };
  } catch (error) {
    if (error instanceof Error) {
      return { code: "", err: error.message };
    } else {
      throw error;
    }
  }
};

export default func;
