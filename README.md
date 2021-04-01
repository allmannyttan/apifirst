# API first 

Kul att du är här! Det här är en rörelse, hjälp gärna till om du ser något fel.

## Kom igång

    npm i
    npm run dev
    open localhost:3000

## Lägg till din egen logga

#### Via Github

1. Tryck på Fork. 
2. Lägg upp din logga under ->  assets/images/resources/&emsp;&emsp;&emsp;(i din fork på din profil)
3. Redigera Footer.js under -> components/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(i din fork på din profil)

    - Lägg till

        ```
        Import UNIKT_NAMN from "../assets/images/resources/FILNAMN_MED_ÄNDELSE
        ```
	
	- Lägg till 
	
	    ```
		<a href=“LÄNK_TILL_ER_HEMSIDA”>
            <img src={UNIKT_NAMN} width="180" alt=“logga för UNIKT_NAMN” />
        </a> 
        ```
        
        - Byt ut 
            - UNIKT_NAMN -> företagsnamn 
            - FILNAMN_MED_ÄNDELSE -> loggans filnamn
            - LÄNK_TILL_ER_HEMSIDA 
        
4. Tryck på Commit.
5. Skicka en pull request.
