import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
    const body = await req.json();

    if (body.secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    try {
        revalidatePath(body.path);
        return NextResponse.json({ revalidated: true });
    } catch (err: unknown) {
        let message = "Erro desconhecido";

        if (err instanceof Error) {
            message = err.message;
        }

        return NextResponse.json(
            { message: `Falha ao revalidar: ${message}` },
            { status: 500 }
        );
    }
}
