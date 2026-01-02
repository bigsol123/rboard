import { TextField } from '@mui/material';


function PostFormFields({ title, content, onChangeTitle, onChangeContent }) {
    return (
        <div>
            <TextField placeholder='제목'
                value={title}
                onChange={(evt) => onChangeTitle(evt.target.value)}
                fullWidth
                sx={{ mb: 2 }}
            />

            <TextField placeholder='내용'
                value={content}
                onChange={(evt) => onChangeContent(evt.target.value)}
                fullWidth
                multiline
                minRows={8}
            />

        </div>
    );
}

export default PostFormFields;