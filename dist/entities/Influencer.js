"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Influencer = void 0;
const typeorm_1 = require("typeorm");
// import { Photo } from "./Photo";
const Services_1 = require("./Services");
let Influencer = class Influencer extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAd = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)() //* Id auto incrementable
    ,
    __metadata("design:type", Number)
], Influencer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Influencer.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Influencer.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Number)
], Influencer.prototype, "estatura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Influencer.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Influencer.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Influencer.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }) //* Valor por defecto
    ,
    __metadata("design:type", Boolean)
], Influencer.prototype, "habilitado", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Services_1.Services),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Influencer.prototype, "services", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Influencer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Influencer.prototype, "updatedAd", void 0);
Influencer = __decorate([
    (0, typeorm_1.Entity)()
], Influencer);
exports.Influencer = Influencer;
