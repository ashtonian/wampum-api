SELECT u.user_id AS "userId",
       u.email,
       u.phone_number AS "phoneNumber",
       u.password
FROM public.user u
WHERE email = $1