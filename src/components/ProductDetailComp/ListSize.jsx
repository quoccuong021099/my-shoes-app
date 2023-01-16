import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

export default function ListSize({ data = [], valueSize, setValueSize }) {
  return (
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
          Size:
          {data?.map((item) => (
            <FormControlLabel
              value={valueSize}
              key={item}
              checked={item === valueSize}
              sx={{ ml: 2 }}
              control={
                <Radio
                  color="third"
                  value={item}
                  sx={{
                    backgroundColor: '#fff',
                    width: 5,
                    height: 5,
                    '&:hover': {
                      backgroundColor: '#0288d1',
                    },
                  }}
                />
              }
              label={item}
            />
          ))}
        </Typography>
      </RadioGroup>
    </Typography>
  );
}
