import { exec } from "child_process";

export function npmCommand(name) {
  return new Promise((resolve, reject) => {
    exec(`npm install ${name}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error details: ${stderr}`);
        return;
      }
      if (stderr) {
        reject(`stderr: ${stderr}`);
        return;
      }
      resolve(`Result:\n${stdout}`);
    });
  });
}
