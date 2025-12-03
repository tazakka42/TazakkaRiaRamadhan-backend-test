SELECT pendidikan.id_murid ,murid.name ,pendidikan.status AS pendidikan_terakhir, murid.time_create, pendidikan.time_create AS time_update
FROM pendidikan INNER JOIN murid ON pendidikan.id_murid = murid.id WHERE pendidikan.id IN (
    SELECT MAX(pendidikan.id)
    FROM pendidikan 
    GROUP BY pendidikan.id_murid 
)