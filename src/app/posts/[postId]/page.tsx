import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Post } from "../../../models";
import { PostService } from "../../../services/post-service";

async function PostDetailsPage({params}: {params: { postId: string }}) {
  const data = await new PostService().findOne(Number(params.postId));

  const post: Post = data ? data : { id: 0, title: '', body: '', userId: 0 };

  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12} md={12}>
        <Typography variant="h4"><b>{post.title.toUpperCase()}</b></Typography>
        <Box
          mt={2}
          sx={{
            color: "primary.main",
            display: "flex",
          }}
        >
          <Typography variant="button">Autor</Typography>
        </Box>
        <Typography sx={{ mt: 2, ml: 3 }}>{post.userId}</Typography>
        <Card sx={{ mt: 1 }} raised={true}>
          <CardContent>
            {post.body}
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}

export default PostDetailsPage;