import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { PostService } from "../../services/post-service";
import { Post } from "../../models";

async function PostsPage() {
  const posts: Post[] = await new PostService().findAll();

  return (
    <Grid2 container spacing={2}>
      {
        posts.map((post, key) => (
          <Grid2 xs={12} sm={6} md={4} key={key}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  <b>{post.title.toUpperCase()}</b>
                </Typography>
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                >
                  Autor: {post.userId}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
                <Link
                  href={`/posts/${post.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button size="small">
                    Visualizar
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid2>
        ))
      }
    </Grid2>
  )
}

export default PostsPage;