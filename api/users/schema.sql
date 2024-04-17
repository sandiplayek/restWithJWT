CREATE TABLE `registration` (
  `id` int(4) NOT NULL,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
  `gender` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `number` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `registration` (`id`, `firstName`, `lastName`, `gender`, `email`, `password`, `number`) VALUES
(1, 'Atanu', 'Roy', 'm', 'atanu@test.com', '$2b$10$FZDriMJlzjIkOhN5R4MdNORVFmMK.foWxJtb/x2zN/6utbL1cOIHG', 1234567),
(2, 'Sandip', 'Roy', 'm', 'sandip2@test.com', '$2b$10$72NLbfjWjKEoslz6oprKs.Pardi2xm2TFxafaZxXuc.Yctdhd.Kpe', 1234567);


here password is test123 for all
DBname = restapi


-- to login in DB
-- {
--     "email" : "sita@test.com",
--     "password" :"test123"
-- }



-- To INSERT in DB after login -- 

-- {
-- 	"firstName": "sita",
--     "lastName" : "Roy",
--     "gender" : "F",
--     "email" : "sita@test.com",
--     "password" :"test123",
--     "number" : 56789012
-- }