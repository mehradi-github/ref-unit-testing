import path from "path";
import { promises as fs } from "fs";

export const writeData = (data: string, fileName: string) => {
  const storagePath = path.join(process.cwd(), "data", fileName);
  return fs.writeFile(storagePath, data);
};
