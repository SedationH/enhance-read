import { writeFileSync } from "fs"
import {
  PDFExtract,
  PDFExtractOptions,
} from "pdf.js-extract"
const pdfExtract = new PDFExtract()
const options: PDFExtractOptions = {} /* see below */
let ans = ""

async function satrt() {
  const { pages } = await pdfExtract.extract(
    "test.pdf",
    options
  )
  console.log(pages)
  pages.forEach(({ content }) => {
    let pageStr = ""
    content.forEach(({ str }) => {
      if (str) pageStr += str
    })
    ans += `<p>${pageStr}</p>`
  })
  writeFileSync("index.html", ans)
}

satrt()
