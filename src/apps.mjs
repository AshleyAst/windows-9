import axios from 'axios';

export const data = axios.get('https://api.github.com/repos/nxoscloud/nxos-apps/contents/').then((response) => {
    const filteredData = response.data.filter(item => item.type === 'dir');
    // Now you can save filteredData or use it directly.
    // console.log(filteredData);

    const dirname = filteredData.forEach(element => {
        console.log(element.html_url);
    });

    /*/        
        response.data.forEach((element) => {
            console.log(element.path);
            if (element.path === 'apps-packages.json') {
                console.log('Found apps-packages.json');
            }
        });
    /*/

    return filteredData;
    return dirname;

}).catch((error) => {
    console.error(error);
});

