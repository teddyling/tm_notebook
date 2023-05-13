import path from "path";
import { Command } from "commander";
import { serve } from "@tm_notebook/local-api";

const isProduction = process.env.NODE_ENV === "production";

export const executeCommand = new Command()
  .command("execute [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "3001")
  .action(async (filename = "myNotebook.js", options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));

      await serve(+options.port, path.basename(filename), dir, !isProduction);
      console.log(`
          Opened ${filename}. Navigate to http://localhost:${options.port} to edit the cells`);
    } catch (err) {
      if (err instanceof Error) {
        console.log("Here is the problem", err.message);
      } else {
        console.log(err);
      }
      process.exit(1);
    }
  });
