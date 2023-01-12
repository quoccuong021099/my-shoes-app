/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackHomeButton from '../../components/BackHomeButton';
import { AddCartIcon, ShoesIcon, ShoppingIcon } from '../../components/icons';
import Loading from '../../components/Loading';
import {
  getProductDetail,
  selectProductDetail,
  selectStatusProductDetail,
} from './detailProductSlice';

export default function DetailProduct() {
  const [valueSize, setValueSize] = useState(31);
  const dispatch = useDispatch();
  const { id } = useParams();

  const data = useSelector(selectProductDetail);
  const { isLoading } = useSelector(selectStatusProductDetail);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [id]);

  const convertCurrency = (number) =>
    number.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          fontSize={40}
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <ShoesIcon sx={{ fontSize: 40, mr: 1 }} />
          <span>Product detail</span>
        </Typography>
        <BackHomeButton />
      </Box>
      <Box display="flex" justifyContent="center" mt={8}>
        <Card
          variant="outlined"
          sx={{
            backgroundColor: '#000',
            my: 1,
            p: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '65%',
            minHeight: '300px',
          }}
        >
          {isLoading ? (
            <Loading width={50} />
          ) : (
            <>
              {data.length > 0 ? (
                <Box
                  sx={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', lg: 'row' },
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    my={{ xs: 2, lg: 0 }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: 300, xl: 500 },
                        height: { xs: 300, xl: 500 },
                        backgroundColor: '#fff',
                        p: 1,
                        textAlign: 'center',
                      }}
                      image={data[0]?.image}
                      alt={data[0]?.name}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      color: '#fff',
                      flex: 1,
                      py: { xs: 1, md: 0 },
                      px: { xs: 0, md: 1 },
                      pr: { xs: 0, md: 0 },
                    }}
                  >
                    <Rating
                      name="read-only"
                      value={data[0]?.star || 0}
                      readOnly
                      size="large"
                    />
                    <Typography component="h5" variant="h5">
                      Name: {data[0]?.name}
                    </Typography>
                    <Typography component="h5" variant="h5">
                      Price:{' '}
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="white"
                        sx={{ mr: 2, textDecoration: 'line-through' }}
                      >
                        <b>
                          {convertCurrency(
                            +data[0]?.price.replaceAll(/[.,]/g, ''),
                          )}
                        </b>
                      </Typography>
                      <Typography component="span" variant="h5" color="error">
                        <b>
                          {convertCurrency(
                            +data[0]?.price.replaceAll(/[.,]/g, '') -
                              (data[0]?.discount *
                                +data[0]?.price.replaceAll(/[.,]/g, '')) /
                                100,
                          )}
                        </b>
                      </Typography>
                    </Typography>

                    <Divider
                      orientation="horizontal"
                      color="primary"
                      sx={{ my: 2 }}
                    />

                    <Typography variant="subtitle1" component="div">
                      <RadioGroup
                        onChange={(e) => setValueSize(e.target.value)}
                        value={valueSize}
                        sx={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <Typography component="span" sx={{ mr: 2 }}>
                          Size: {data[0]?.size}
                        </Typography>
                        <FormControlLabel
                          value="31"
                          control={<Radio color="third" />}
                          label="31"
                        />
                        <FormControlLabel
                          value="32"
                          control={<Radio color="third" />}
                          label="32"
                        />
                        <FormControlLabel
                          value="33"
                          control={<Radio color="third" />}
                          label="33"
                        />
                      </RadioGroup>
                    </Typography>

                    <Divider
                      orientation="horizontal"
                      color="primary"
                      sx={{ my: 2 }}
                    />

                    <Typography variant="subtitle1" component="div">
                      Quantity: Mac Miller
                    </Typography>

                    <Divider
                      orientation="horizontal"
                      color="primary"
                      sx={{ my: 2 }}
                    />

                    <Stack direction="row">
                      <Button color="third" variant="contained" fullWidth>
                        <AddCartIcon fontSize="small" sx={{ mr: 1 }} />
                        <span> Add to cart</span>
                      </Button>
                      &nbsp;
                      <Button color="secondary" variant="contained" fullWidth>
                        <ShoppingIcon fontSize="small" sx={{ mr: 1 }} />
                        <span>Order now</span>
                      </Button>
                    </Stack>

                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ mt: 2 }}
                    >
                      Hoặc đặt mua:{' '}
                      <Typography component="span" variant="h6" color="error">
                        19000009
                      </Typography>{' '}
                      (Tư vấn Miễn phí)
                    </Typography>
                  </CardContent>
                </Box>
              ) : (
                'nan'
              )}
            </>
          )}
        </Card>
      </Box>
    </Container>
  );
}
