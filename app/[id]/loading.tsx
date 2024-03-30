import { Container, Grid, Skeleton } from "@radix-ui/themes"

export default function LoadingPage() {
    return (
        <Container>
            <div className="mb-4">
                <Skeleton width={'150px'} height={'50px'}></Skeleton>
            </div>
            <Grid columns={{ initial: '1', md: '2' }} gap="3" rows="repeat(1, 70vh)" width="auto">
                <Skeleton minHeight="408px" height="100%"></Skeleton>
                <div className="hidden lg:block">
                    <Skeleton minHeight="408px" height="100%"></Skeleton>
                </div>
                
            </Grid>
        </Container>
    )
}