import { Container, Grid, Skeleton } from "@radix-ui/themes";

export default function LoadingPage() {
    return (
        <Container>
            <Grid columns="3" gap="3" rows="repeat(2, 204px)" width="auto">
                <Skeleton minHeight="204px"></Skeleton>
                <Skeleton minHeight="204px"></Skeleton>
                <Skeleton minHeight="204px"></Skeleton>
                <Skeleton minHeight="204px"></Skeleton>
                <Skeleton minHeight="204px"></Skeleton>
                <Skeleton minHeight="204px"></Skeleton>
                <Skeleton minHeight="204px"></Skeleton>
                <Skeleton minHeight="204px"></Skeleton>
                <Skeleton minHeight="204px"></Skeleton>
            </Grid>
        </Container>
    )
}

/*
<div className="grid grid-cols-1 row-span-2 gap-3 md:grid-cols-3 sm:grid-cols-2">
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
            </div>*/