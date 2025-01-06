'use client';
import { NextPage } from 'next';
import { 
  // useForm, 
  // Controller 
} from 'react-hook-form';
import { 
  // TextField, 
  // Button, 
  Box, 
  // InputLabel
} from '@mui/material';
// import { teal } from '@mui/material/colors';

// interface SignUpFormData {
//   username: string;
//   email: string;
//   body: string;
// }

const Contact: NextPage = () => {
  // フォームのセットアップ
  // const { control, handleSubmit,  watch } = useForm<SignUpFormData>({
  //   defaultValues: {
  //     username: '',
  //     email: '',
  //     body: ''
  //   },
  // });

  // フォーム送信時の処理
  // const onSubmit = (data: SignUpFormData) => {
  //   console.log('サインアップデータ:', data);
  // };

  // 全項目入力されているかチェック
  // const username = watch('username');
  // const email = watch('email');
  // const body = watch('body');

  return (
    <Box
      sx={{
        maxWidth: '960px',
        Width: '95%',
        margin: 'auto',
        // padding: 4,
        // backgroundColor: '#fff',
        borderRadius: '10px',
        // boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
    >
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{mb:2}}>
          <InputLabel sx={{color:'#666', fontWeight:700, fontSize:'12px', letterSpacing:1.4}}>お名前</InputLabel>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                className='aaaaaa'
                {...field}
                label="お名前を入力してください。"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ backgroundColor: 'rgb(240, 240, 240)', mt:1, borderRadius:'5px' }}
              />
            )}
          
          />
        </Box>

        <Box sx={{mb:2}}>
          <InputLabel sx={{color:'#666', fontWeight:700, fontSize:'12px', letterSpacing:1.4}}>メールアドレス</InputLabel>
          <Controller
            name='email'
            control={control}
            render = {({field}) =>
              <TextField
                {...field}
                label = 'ご連絡先を入力してください。'
                variant = 'outlined'
                fullWidth
                margin='normal'
                sx={{ bgcolor:'rgb(240, 240, 240)', mt:1, borderRadius:'5px' }}
                /> 
            }
          />
        </Box>

        <Box>
          <InputLabel sx={{color:'#666', fontWeight:700, fontSize:'12px', letterSpacing:1.4}}>お問い合せ内容</InputLabel>
          <Controller
            name='body'
            control={control}
            render = {({field}) =>
              <TextField
                {...field}
                label = '内容をご入力ください。'
                variant = 'outlined'
                fullWidth
                margin='normal'
                sx={{ bgcolor:'rgb(240, 240, 240)', mt:1, borderRadius:'5px' }}
                multiline
                rows={10}
              /> 
            }
          />
        </Box>

        <Box sx={{ mt:2, textAlign:'center'}}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py:2, px:4, backgroundColor:teal[700], fontWeight:700, maxWidth:'300px'}}
            disabled={username == "" || email == "" || body == ""}
          >
            問い合わせする
          </Button>
        </Box>
      </form> */}
      <iframe id="contactForm" src="https://docs.google.com/forms/d/e/1FAIpQLSfvODmdEs3i29skHAv0flvXZt_4pdB7qvfTjsv2JTn5nQ7Obw/viewform?embedded=true" height="500" frameBorder={0} marginHeight={0} marginWidth={0}>読み込んでいます…</iframe>
    </Box>
  );
};

Contact.displayName = 'Contact';
export default Contact;