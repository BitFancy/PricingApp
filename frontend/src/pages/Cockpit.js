import { useState } from 'react';
import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import ChartBar from 'components/ChartBar';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import { getUser } from 'hooks/user.actions';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Select, OutlinedInput, FormControl, InputLabel, MenuItem, ListItemText, Checkbox } from '@mui/material';
import { Button } from '@material-tailwind/react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

export default function Cockpit() {
    const [storeName, setStoreName] = useState([]);

    const user = getUser();
    if(!user) {
        return <div>Loading!</div>;
    }

    const stores = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setStoreName(
          typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>

            <div className="px-3 md:px-8 mt-6 flex flex-wrap gap-4">
                <div className='w-full md:w-1/2 lg:w-auto'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['SingleInputDateRangeField']}>
                            <DateRangePicker label="Date" slots={{ field: SingleInputDateRangeField }} style={{ width: '250px'}}/>
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div className='w-full md:w-1/2 lg:w-auto'>
                    <FormControl sx={{ m: 1, width: 250 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Store</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={storeName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {stores.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={storeName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className='w-full md:w-1/2 lg:w-auto'>
                    <FormControl sx={{ m: 1, width: 250 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Cluster</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={storeName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {stores.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={storeName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className='w-full md:w-1/2 lg:w-auto'>
                    <FormControl sx={{ m: 1, width: 250 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={storeName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {stores.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={storeName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className='w-full md:w-1/2 lg:w-auto'>
                    <FormControl sx={{ m: 1, width: 250 }}>
                        <InputLabel id="demo-multiple-checkbox-label">SKU</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={storeName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {stores.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={storeName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="px-3 md:px-8 mt-16">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <ChartLine />
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <ChartBar />
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:mx-auto flex justify-center'>
                <Button fullWidth variant="filled">Download</Button>
            </div>

            {/* <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Sales"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <PageVisitsCard />
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <TrafficCard />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
