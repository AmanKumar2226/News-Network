



export const getHoroscope = async (req, res) => {
    

        const { sign } = req.query;
        
        const url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=TODAY`;
      
        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            res.json(data);
          } catch (error) {
            res.status(500).send(error.message);
          }
        

    }


  



