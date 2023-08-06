import type { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Dashboard(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const my_other_secret = process.env.NEXT_PUBLIC_MY_SECRET;

    return (
        <p>Hola Dashboard { props.my_secret } -- { my_other_secret }</p>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const my_secret = process.env.MY_SECRET;
    console.log(my_secret);
    return { props: { my_secret } }
}
