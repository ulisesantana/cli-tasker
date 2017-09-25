"use strict";
exports.__esModule = true;
var fs = require("fs");
var os = require("os");
;
var FileManager = /** @class */ (function () {
    function FileManager(directoryPath, files) {
        var _this = this;
        this.directoryPath = os.homedir() + "/" + directoryPath;
        if (!fs.existsSync(this.directoryPath)) {
            fs.mkdirSync(this.directoryPath);
            if (files) {
                files.forEach(function (file) {
                    fs.writeFileSync(_this.getPath(file.path), JSON.stringify(file.data));
                });
            }
        }
    }
    FileManager.prototype.getFile = function (filePath) {
        try {
            return fs.readFileSync(this.getPath(filePath)).toString();
        }
        catch (err) {
            console.log(err);
        }
    };
    FileManager.prototype.getJSONFile = function (filePath) {
        try {
            return JSON.parse(fs.readFileSync(this.getPath(filePath)).toString());
        }
        catch (err) {
            throw err;
        }
    };
    FileManager.prototype.saveFile = function (filePath, data) {
        try {
            fs.writeFileSync(this.getPath(filePath), data);
        }
        catch (err) {
            throw err;
        }
    };
    FileManager.prototype.getPath = function (filePath) {
        return this.directoryPath + "/" + filePath;
    };
    return FileManager;
}());
exports["default"] = FileManager;
