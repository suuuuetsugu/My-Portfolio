import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type WorkProps = {
    id: number
}

const Work: NextPage<WorkProps> = (props) => {
    const { id } = props
    const router = useRouter()

    if(router.isFallback) {
        // フォールバック向けのページ
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main> <p>テスト</p>
                <p>{`/works/${id}に対応するページ`}</p>
            </main>
        </div>
    )
}