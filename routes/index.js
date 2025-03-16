import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    const locals = {
      title: "Index blog page",
      description: "lorem ipsum dolor sit amet consectetur",
    }

  res.render('index', locals);
})

export default router;