--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Tags" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content character varying(255) NOT NULL,
    owner bigint,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Tags" OWNER TO postgres;

--
-- Name: Tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Tags_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tags_id_seq" OWNER TO postgres;

--
-- Name: Tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Tags_id_seq" OWNED BY public."Tags".id;


--
-- Name: Tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tags" ALTER COLUMN id SET DEFAULT nextval('public."Tags_id_seq"'::regclass);


--
-- Data for Name: Tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Tags" (id, name, content, owner, "createdAt", "updatedAt") FROM stdin;
6	venom	soy gilipollas	270754878794629120	2022-05-27 05:15:44.948-03	2022-05-27 05:15:44.948-03
8	sexo	putas	270754878794629120	2022-05-27 05:33:31.058-03	2022-05-27 05:33:31.058-03
9	drogas	sexo	270754878794629120	2022-05-27 05:34:50.876-03	2022-05-27 05:34:50.876-03
10	gor	dasgaming	270754878794629120	2022-05-27 05:44:02.35-03	2022-05-27 05:44:02.35-03
11	asoplata51	si	270754878794629120	2022-05-27 22:43:14.827-03	2022-05-28 02:27:38.075-03
31	FuckGirl	<a:foxyay:938883975529758800>	338504196485545985	2022-05-28 02:49:48.938-03	2022-05-28 02:50:18.419-03
32	pppp	<:naotochoco:746950639300509716>	270754878794629120	2022-05-28 02:59:34.761-03	2022-05-28 02:59:34.761-03
33	ㅤ	ㅤ	254821213573087232	2022-05-28 03:01:20.799-03	2022-05-28 03:01:20.799-03
34	Pixies	https://www.youtube.com/watch?v=YmgWzM6AHuU	298108010826301450	2022-05-28 03:29:11.475-03	2022-05-28 03:29:11.475-03
30	cars	https://www.youtube.com/watch?v=X3HlFewKByw	254821213573087232	2022-05-28 02:28:10.243-03	2022-05-28 03:35:22.188-03
35	Asoplata	https://media.discordapp.net/attachments/924175007494569984/972539504554541056/asogif.gif	254821213573087232	2022-05-28 03:40:32.642-03	2022-05-28 03:40:32.642-03
36	asoescuchaestacancion	https://youtu.be/g97La0u55_g	270754878794629120	2022-05-28 03:41:50.438-03	2022-05-28 03:41:50.438-03
37	<@380858445223428097>	 https://tenor.com/view/lucifer-devil-throne-hell-sitting-gif-14230875	298108010826301450	2022-05-28 03:42:01.818-03	2022-05-28 03:44:34.956-03
38	Meiggs	https://media.discordapp.net/attachments/612794940413444108/979999612544897044/unknown.png	298108010826301450	2022-05-28 03:47:33.797-03	2022-05-28 03:47:33.797-03
39	Buda	https://www.google.com/maps/place/Casa+de+Carlos+Daniel+Concha+Meiggs/@40.8759925,-74.0956179,17z/data=!3m1!4b1!4m9!1m3!11m2!2sQsKO8dKK_izBBdlD3BIRomuuZtylWw!3e1!3m4!1s0x89c2f93d036617ff:0x6c3cb367974ec36c!8m2!3d40.8759926!4d-74.0913961	298108010826301450	2022-05-28 03:49:21.07-03	2022-05-28 03:49:21.07-03
1	perras	venom	270754878794629120	2022-05-27 05:08:56.221-03	2022-05-28 04:09:03.522-03
42	's	Parlé .i.	380858445223428097	2022-05-28 04:10:57.452-03	2022-05-28 04:10:57.452-03
43	's_Parlé	.i.	298108010826301450	2022-05-28 04:11:18.095-03	2022-05-28 04:11:18.095-03
44	<@254821213573087232>	SÉ QUE ESTÁS AHÍ QUÉ ME RESPONDERÁS	380858445223428097	2022-05-28 04:13:05.562-03	2022-05-28 04:13:05.562-03
45	<@390684658075041796>	https://media.discordapp.net/attachments/968038966702006282/979895829873721364/unknown.png	380858445223428097	2022-05-28 04:15:51.331-03	2022-05-28 04:15:51.331-03
46	<@270754878794629120>	https://cdn.discordapp.com/attachments/976154861945098313/976935127869448213/full-1.webm	298108010826301450	2022-05-28 04:19:56.756-03	2022-05-28 04:19:56.756-03
47	<@298108010826301450>	https://cdn.discordapp.com/attachments/757994563385163837/865415268326178846/click.mp4	298108010826301450	2022-05-28 04:23:27.195-03	2022-05-28 04:23:27.195-03
48	HolaAA_Theme	https://ia802503.us.archive.org/23/items/eminem-the-eminem-show-album/The%20Eminem%20Show/10-Without%20Me.mp3	380858445223428097	2022-05-28 04:31:07.443-03	2022-05-28 04:31:07.443-03
\.


--
-- Name: Tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Tags_id_seq"', 48, true);


--
-- Name: Tags Tags_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tags"
    ADD CONSTRAINT "Tags_name_key" UNIQUE (name);


--
-- Name: Tags Tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tags"
    ADD CONSTRAINT "Tags_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

