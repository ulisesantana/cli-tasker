"use strict";
exports.__esModule = true;
var fs = require("fs");
var os = require("os");
var fileManager_config_1 = require("./fileManager.config");
var FileManager = /** @class */ (function () {
    function FileManager() {
        var _this = this;
        this.directoryPath = os.homedir() + "/" + fileManager_config_1["default"].paths.directoryPath;
        if (!fs.existsSync(this.directoryPath)) {
            fs.mkdirSync(this.directoryPath);
            if (fileManager_config_1["default"].initialFiles) {
                fileManager_config_1["default"].initialFiles.forEach(function (file) {
                    fs.writeFileSync(_this.getPath(file.path), JSON.stringify(file.data));
                });
            }
        }
        if (fileManager_config_1["default"].initialFiles) {
            fileManager_config_1["default"].initialFiles.forEach(function (file) {
                if (!fs.existsSync(_this.getPath(file.path))) {
                    fs.writeFileSync(_this.getPath(file.path), JSON.stringify(file.data));
                }
            });
        }
    }
    FileManager.prototype.getConfig = function () {
        return fileManager_config_1["default"];
    };
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
    FileManager.prototype.updateFile = function (filePath, data) {
        try {
            fs.appendFileSync(this.getPath(filePath), data);
        }
        catch (err) {
            throw err;
        }
    };
    FileManager.prototype.deleteFile = function (filePath) {
        try {
            fs.unlinkSync(this.getPath(filePath));
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
