import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";


@Injectable()
export class LoopService {
    constructor(private readonly prisma: PrismaService) { }
    async startLoop() {
        setInterval( async ()=>{
            const r = await this.prisma.profile.findMany()
            console.log(r)
        },60000)
    }
}