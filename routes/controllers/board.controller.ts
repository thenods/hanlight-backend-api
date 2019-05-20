import { Router } from 'express';

// validation
import deleteCommentValidation from '@Middleware/board/comment/delete/_validation';
import getCommentValidation from '@Middleware/board/comment/get/_validation';
import patchCommentValidation from '@Middleware/board/comment/patch/_validation';
import PostCommentValidation from '@Middleware/board/comment/post/_validation';
import deleteBoardValidation from '@Middleware/board/delete/_validation';
import getBoardValidation from '@Middleware/board/get/_validation';
import likeValidation from '@Middleware/board/like/_validation';
import patchBoardValidation from '@Middleware/board/patch/_validation';
import postBoardValidation from '@Middleware/board/post/_validation';
import reportValidation from '@Middleware/board/report/_validation';
import checkValidation from '@Middleware/common/checkValidation';

// common
import checkUserType from '@Middleware/board/common/checkUserType';

// board
import deleteBoard from '@Middleware/board/delete/deleteBoard';
import getBoard from '@Middleware/board/get/getBoard';
import patchBoard from '@Middleware/board/patch/patchBoard';
import postBoard from '@Middleware/board/post/postBoard';

// report
import report from '@Middleware/board/report/report';

// comment
import deleteComment from '@Middleware/board/comment/delete/deleteComment';
import getComment from '@Middleware/board/comment/get/getComment';
import patchComment from '@Middleware/board/comment/patch/patchComment';
import postComment from '@Middleware/board/comment/post/postComment';

// like
import boardLike from '@Middleware/board/like/boardLike';

const router: Router = Router();

router.get('/', getBoardValidation);
router.post('/', checkUserType, postBoardValidation);
router.patch('/', checkUserType, patchBoardValidation);
router.delete('/', checkUserType, deleteBoardValidation);
router.post('/report', reportValidation);
router.get('/comment', getCommentValidation);
router.post('/comment', checkUserType, PostCommentValidation);
router.patch('/comment', checkUserType, patchCommentValidation);
router.delete('/comment', checkUserType, deleteCommentValidation);
router.get('/like', checkUserType, likeValidation);

router.use(checkValidation);

router.get('/', getBoard);
router.post('/', postBoard);
router.patch('/', patchBoard);
router.delete('/', deleteBoard);
router.post('/report', report);
router.get('/comment', getComment);
router.post('/comment', postComment);
router.patch('/comment', patchComment);
router.delete('/comment', deleteComment);
router.get('/like', boardLike);

export default router;
