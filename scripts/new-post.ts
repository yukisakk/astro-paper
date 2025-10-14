import fs from "fs";
import path from "path";

/** 今日の日付を YYYY-MM-DD 形式で返す */
function getDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// コマンドライン引数（node, script, ...args）の3つ目以降を取得
const args: string[] = process.argv.slice(2);

if (args.length === 0) {
  console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename>`);
  process.exit(1);
}

let fileName: string = args[0];

// .md もしくは .mdx が拡張子としてついていなければ追加する
const fileExtensionRegex: RegExp = /\.(md|mdx)$/i;
if (!fileExtensionRegex.test(fileName)) {
  fileName += ".md";
}

const targetDir: string = "./src/data/blog/";
const fullPath: string = path.join(targetDir, fileName);

// 既にファイルが存在する場合はエラーで終了
if (fs.existsSync(fullPath)) {
  console.error(`Error: File ${fullPath} already exists`);
  process.exit(1);
}

// ディレクトリが存在しない場合は再帰的に作成
const dirPath: string = path.dirname(fullPath);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// Markdownファイルの初期内容
const content: string = `---
author: yukisakk
pubDatetime: ${getDate()}
title: ${args[0]}
featured: false
draft: false
tags: []
description: ''
---
`;

// ファイル作成
fs.writeFileSync(fullPath, content);

console.log(`Post ${fullPath} created`); // eslint-disable-line no-console
