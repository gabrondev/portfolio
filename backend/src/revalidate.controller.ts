import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";

interface RevalidateDto {
    secret: string;
    path: string;
}

@Controller('revalidate')
export class RevalidateController {
    @Post()
    async revalidate(@Body() body: RevalidateDto) {
        const { secret, path } = body;

        if (secret !== process.env.REVALIDATE_SECRET) {
            throw new HttpException('Não autorizado', HttpStatus.UNAUTHORIZED);
        }

        try {
            const nextUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate`;

            const res = await fetch(nextUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ secret, path }),
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Revalidate do Next.js falhou: ${text}`);
            }

            return { revalidated: true, path };
        } catch (err: any) {
            throw new HttpException(`Falha ao revalidar: ${err.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
