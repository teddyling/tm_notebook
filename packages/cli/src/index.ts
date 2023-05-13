#!/usr/bin/env node
import { program } from "commander";
import { executeCommand } from "./commands/execute";

program.addCommand(executeCommand);

program.parse(process.argv);
