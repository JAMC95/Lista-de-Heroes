System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Hero;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Hero = (function () {
                function Hero() {
                }
                Hero.prototype.remove = function (i) {
                    this.items.splice(i, 1);
                };
                Hero = __decorate([
                    core_1.Component({
                        selector: "heroes",
                        properties: ["items"]
                    }),
                    core_1.View({
                        template: "\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"#hero of items #i=index\">\n            {{i+1}}.- {{hero}}\n        <span class=\"btn btn-xs btn-danger\" (click)=\"remove(i)\">Eliminar h\u00E9roe</span>\n        </li>\n    </ul>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Hero);
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map