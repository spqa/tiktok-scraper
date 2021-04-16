"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signv2 = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
async function signv2(url) {
    const browser = await puppeteer_1.default.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ]
    });
    const page = await browser.newPage();
    await page.goto('https://www.tiktok.com');
    return await page.evaluate((url) => {
        return byted_acrawler.sign({
            url: url
        });
    }, url);
}
exports.signv2 = signv2;
