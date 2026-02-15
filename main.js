/* ═══════════════════════════════════════════════════
   BCJ UNAM — Biblioteca del Campus Juriquilla
   Main JavaScript — Interactions & i18n
   ═══════════════════════════════════════════════════ */

// ─────────────────────────────────────────────
//  TRANSLATIONS
// ─────────────────────────────────────────────
const translations = {
  es: {
    // Nav
    nav_inicio: "Inicio",
    nav_nosotros: "Nosotros",
    nav_servicios: "Servicios",
    nav_catalogos: "Catálogos",
    nav_personal: "Personal",
    nav_directorio: "Directorio",
    nav_eventos: "Eventos",
    nav_formularios: "Formularios",

    // Hero
    hero_label: "Campus Juriquilla, Querétaro",
    hero_title: 'Biblioteca del<br>Campus <em>Juriquilla</em>',
    hero_desc: "Unidad de información especializada en Neurociencias, Ciencias de la Tierra, Física Aplicada y Tecnología Avanzada de la Universidad Nacional Autónoma de México.",
    hero_btn_catalog: "Explorar Catálogos",
    hero_btn_more: "Conocer más →",
    stat1_num: "14,000+",
    stat1_label: "Volúmenes de libros",
    stat2_num: "431",
    stat2_label: "Títulos de revistas científicas",
    stat3_num: "1,300+",
    stat3_label: "Tesis de licenciatura a doctorado",
    stat4_num: "107",
    stat4_label: "Suscripciones vigentes",

    // Resources band
    res_produccion: "Producción Científica del Campus",
    res_boletin: "Boletín de Nuevas Adquisiciones",
    res_venta: "Venta de Libros",
    res_reglamento: "Reglamento de Biblioteca",
    res_investigadores: "Investigadores Nacionales 2021",

    // About
    about_label: "Acerca de nosotros",
    about_title: "Una tradición de<br>conocimiento científico",
    about_p1: "La Biblioteca del Campus Juriquilla quedó establecida el 24 de noviembre de 2006 con la integración de los acervos de las bibliotecas departamentales del Instituto de Neurobiología, Centro de Geociencias y del Centro de Física Aplicada y Tecnología Avanzada, constituyéndose como un importante centro documental para las unidades de investigación que le dieron origen.",
    about_p2: "Actualmente se encuentra ubicada en el edificio del Centro Académico Cultural del Campus y cuenta con una amplia diversidad de materiales: revistas científicas, publicaciones periódicas y seriadas, obras monográficas, mapas y material multimedia, disponibles para la consulta de estudiantes, investigadores y visitantes en general.",
    coll1_title: "Colección Rafael Lorente de Nó",
    coll1_desc: "Dibujos que representan la anatomía del cerebro realizados por el célebre fisiólogo, resguardados como parte de la riqueza del acervo de esta biblioteca.",
    coll2_title: "Exposición de Relojes Solares",
    coll2_desc: "Exposición permanente de piezas únicas realizadas por el Dr. Lothar Max Kuhnert Loske, especialista en Mecánica de Precisión y Cronometría.",
    coll3_title: "Áreas de Especialización",
    coll3_desc: "Neurociencias, Geociencias, Física y Tecnología Avanzada, Genoma Humano, Ingeniería, Matemáticas y otras áreas afines de investigación.",

    // Services
    svc_label: "Nuestros servicios",
    svc_title: "Todo lo que necesitas para tu investigación",
    svc_desc: "Ofrecemos una amplia gama de servicios para apoyar las tareas de investigación, docencia y estudio en el Campus Juriquilla.",
    svc1_title: "Desarrollo de Colecciones y Procesos Técnicos",
    svc1_desc: "Compra de materiales bibliográficos para la Biblioteca, apoyo a investigadores y estudiantes en la gestión y compra de materiales para uso personal.",
    svc2_title: "Documentación y Servicios Especializados",
    svc2_desc: "Recuperación de documentos solicitados con fines de investigación, revisión y búsqueda de citas a trabajos de investigación publicados por investigadores del Campus.",
    svc3_title: "Préstamo en Sala",
    svc3_desc: "Los materiales bibliográficos requeridos por usuarios internos y externos son proporcionados en préstamo dentro de las instalaciones de la Biblioteca.",
    svc4_title: "Préstamo Interbibliotecario",
    svc4_desc: "Recuperación de libros y documentos de otras bibliotecas a través de convenios, exclusivo para el personal con registro en la Biblioteca.",
    svc5_title: "Préstamo Externo",
    svc5_desc: "Libros de acervo general, excepto los de consulta y reserva, se prestan para su consulta fuera de la Biblioteca. Exclusivo para usuarios con registro.",
    svc6_title: "Consulta y Orientación",
    svc6_desc: "Orientación a los usuarios tanto del interior como de otras instituciones que acuden en busca de información para sus actividades escolares y de investigación.",
    svc7_title: "Fotocopiado e Impresión",
    svc7_desc: "Servicio exclusivo para materiales de la biblioteca en modalidad de autoservicio o con el responsable. También se puede imprimir textos directamente.",
    svc8_title: "Digitalización Documental",
    svc8_desc: "Digitalización de documentos y textos en modalidad de autoservicio. No se permite la digitalización de textos completos para respetar derechos de autor.",
    svc9_title: "Servicios Electrónicos",
    svc9_desc: "Espacio con equipos de cómputo para búsqueda y localización de información, realización de trabajos académicos, y acceso a red inalámbrica.",
    svc10_title: "Otros Espacios",
    svc10_desc: "Sala de Juntas, cubículos para estudio en grupo, sala multimedios, mesas de trabajo individual y Audiorama con espacio abierto y música ambiental.",
    svc11_title: "Visitas Guiadas",
    svc11_desc: "Visitas guiadas disponibles para grupos e instituciones interesadas. Deben ser solicitadas con antelación para coordinar la actividad.",
    svc12_title: "Red Inalámbrica",
    svc12_desc: "El edificio cuenta con acceso a red inalámbrica para que todos aquellos que tienen un equipo personal puedan conectarse a Internet.",

    // Catalogs
    cat_label: "Catálogos y Bases de Datos",
    cat_title: "Acceso al conocimiento global",
    cat_desc: "Explora nuestros catálogos, bases de datos internacionales, revistas de acceso abierto y registros de patentes.",
    tab_catalogs: "Catálogos",
    tab_databases: "Bases de Datos",
    tab_journals: "Revistas Abiertas",
    tab_geo: "Geociencias",
    tab_patents: "Patentes",
    tab_thesis: "Tesis",
    cat_bcj: "Catálogo BCJ",
    cat_bcj_sub: "Más de 14,000 volúmenes",
    cat_librunam: "LIBRUNAM",
    cat_librunam_sub: "Catálogo general UNAM",
    cat_seriunam: "SERIUNAM",
    cat_seriunam_sub: "Publicaciones seriadas",
    cat_tesiunam: "TESIUNAM",
    cat_tesiunam_sub: "Tesis UNAM",
    cat_digitalab: "DIGITALAB-SSIE",
    cat_digitalab_sub: "Revistas con acuerdos UNAM",
    cat_repo: "Repositorio",
    cat_repo_sub: "Producción Científica del Campus",
    db_ncbi: "NCBI",
    db_ncbi_sub: "National Center for Biotechnology",
    db_wos: "ISI Web of Science",
    db_wos_sub: "Base de datos multidisciplinaria",
    db_scopus: "Scopus",
    db_scopus_sub: "Resúmenes y citas",
    db_pubmed: "PubMed",
    db_pubmed_sub: "Ciencias biomédicas",
    db_jcr: "Journal Citation Reports",
    db_jcr_sub: "Factor de impacto",
    db_ccc: "Current Contents Connect",
    db_ccc_sub: "Alertas bibliográficas",
    jr_wiley: "Wiley Open Access",
    jr_wiley_sub: "Revistas de acceso abierto",
    jr_doaj: "DOAJ",
    jr_doaj_sub: "Directory of Open Access Journals",
    jr_elsevier: "Elsevier Open Access",
    jr_elsevier_sub: "Revistas abiertas Elsevier",
    jr_sd: "ScienceDirect Open Access",
    jr_sd_sub: "Acceso abierto ScienceDirect",
    jr_omics: "OMICS International",
    jr_omics_sub: "Publicaciones científicas",
    jr_oxford: "Oxford University Press",
    jr_oxford_sub: "Journals",
    geo_uniatmos: "UNIATMOS",
    geo_uniatmos_sub: "Ciencias Atmosféricas",
    geo_geobase: "GEOBASE",
    geo_geobase_sub: "Base de datos geográfica",
    geo_georef: "GEOREF",
    geo_georef_sub: "Geociencias y referencias",
    geo_geomex: "GEOMEX",
    geo_geomex_sub: "Geología de México UNAM",
    geo_mapamex: "MAPAMEX",
    geo_mapamex_sub: "Mapas de México UNAM",
    geo_inspec: "INSPEC",
    geo_inspec_sub: "Física, electrónica, computación",
    pat_canada: "Canadian Intellectual Property Office",
    pat_canada_sub: "Patentes de Canadá",
    pat_fpo: "Free Patents Online",
    pat_fpo_sub: "Búsqueda gratuita de patentes",
    pat_google: "Google Patents",
    pat_google_sub: "Buscador de patentes",
    pat_wipo: "WIPO",
    pat_wipo_sub: "Organización Mundial de Propiedad Intelectual",
    th_cfata: "CFATA",
    th_cfata_sub: "Centro de Física Aplicada y Tecnología Avanzada",
    th_geo: "Geociencias",
    th_geo_sub: "Centro de Geociencias",
    th_neuro: "Neurobiología",
    th_neuro_sub: "Instituto de Neurobiología",

    // Personal
    per_label: "Nuestro equipo",
    per_title: "Personal de la Biblioteca",
    per_desc: "Equipo profesional comprometido con brindar el mejor servicio a la comunidad académica.",
    role_coord: "Coordinación",
    role_dev: "Desarrollo de Colecciones y Procesos Técnicos",
    role_doc: "Documentación y Servicios Especializados",
    role_pub: "Servicios al Público",
    role_jefe: "Jefe de Biblioteca — Servicios al Público",
    role_bib: "Bibliotecario",
    role_biba: "Bibliotecaria",
    role_jefe_sec: "Jefe de Sección",
    role_proc: "Procesos Técnicos — Bibliotecaria",
    role_foto: "Fotocopiado y Digitalización",
    role_sec: "Secretario",
    role_int: "Intendencia",

    // Directorio
    dir_label: "Directorio",
    dir_title: "Órganos de Dirección",
    dir_consejo: "Consejo de Dirección del Campus Juriquilla",
    dir_comite: "Comité de Biblioteca",
    dir_mt_role: "Directora del Instituto de Neurobiología",
    dir_jp_role: "Director del Instituto de Geociencias",
    dir_jl_role: "Director del Centro de Física Aplicada y Tecnología Avanzada",
    dir_rp_role: "Director de la ENES-Juriquilla",
    dir_gb_role: "Coordinador de la Unidad Académica Juriquilla del Instituto de Ingeniería",
    dir_ml_role: "Unidad de Alta Tecnología de la Facultad de Ingeniería",
    dir_gc_role: "Responsable de la Unidad Multidisciplinaria de Docencia e Investigación, Juriquilla",
    dir_do_role: "Instituto de Matemáticas Unidad Juriquilla",
    dir_ma_role: "Laboratorio Internacional de Investigación sobre el Genoma Humano",
    dir_aa_role: "Coordinadora de Servicios Administrativos del Campus Juriquilla",
    dir_fv_role: "Coordinador de la Biblioteca del Campus Juriquilla",
    dir_tp_role: "Representante del Personal Académico de la Biblioteca",

    // Events
    evt_label: "Eventos",
    evt_title: "Actividades y presentaciones",
    evt_desc: "Eventos culturales y académicos organizados por la Biblioteca del Campus Juriquilla.",
    evt1_date: "28 de Septiembre",
    evt1_type: "Presentación de Libros",
    evt1_title: "Experimentos simples para una tierra complicada",
    evt1_desc: "Presentación de la nueva versión de los cuadernillos de experimentos científicos, traducida a cinco idiomas: chino, inglés, italiano, alemán y francés. La actividad estuvo a cargo de la Dra. Susana Alaníz, investigadora del Centro de Geociencias de la UNAM.",
    evt2_date: "12 de Noviembre",
    evt2_type: "Exposición Litográfica",
    evt2_title: "Fuego de unos instantes: humo, ceniza… y litografía",
    evt2_desc: "Exposición de litografías a cargo de la Dra. Laura del Carmen Mayagoitia, que incluyó grabados de etiquetas de cigarros realizados con técnica litográfica, acompañada de la conferencia «YETL ITACATL TETEO» sobre el uso ceremonial del tabaco en culturas prehispánicas.",

    // Forms
    frm_label: "Formularios",
    frm_title: "Trámites y solicitudes",
    frm_desc: "Descarga los formularios necesarios para acceder a los servicios de la biblioteca.",
    frm1_title: "Registro de Usuarios",
    frm1_desc: "Formulario para registrarse como usuario de la biblioteca",
    frm2_title: "Solicitud de Documentos",
    frm2_desc: "Solicitar documentos por préstamo interbibliotecario",
    frm3_title: "Compra de Libros",
    frm3_desc: "Solicitar la compra de materiales bibliográficos",
    frm4_title: "Reglamento",
    frm4_desc: "Consulta el reglamento de la biblioteca",
    frm5_title: "Protocolo de Servicios Limitados",
    frm5_desc: "Protocolo vigente para servicios con restricciones",
    frm6_title: "Investigadores Nacionales Eméritos",
    frm6_desc: "Listado 1992-2020 del Sistema Nacional de Investigadores",

    // Footer
    ft_nav: "Navegación",
    ft_services: "Servicios",
    ft_resources: "Recursos",
    ft_desc: "Unidad de información especializada en Neurociencias, Ciencias de la Tierra, Física Aplicada y Tecnología Avanzada de la UNAM.",
    ft_prestamos: "Préstamos",
    ft_consulta: "Consulta",
    ft_documentacion: "Documentación",
    ft_fotocopiado: "Fotocopiado",
    ft_electronicos: "Servicios Electrónicos",
    ft_visitas: "Visitas Guiadas",
    ft_reglamento: "Reglamento",
    ft_registro: "Registro de Usuarios",
    ft_produccion: "Producción Científica",
    ft_investigadores: "Investigadores Nacionales",
    ft_boletin: "Boletín de Adquisiciones",
    ft_copyright: "© UNAM. Biblioteca de Campus Juriquilla 2009–2024",
    ft_credits: "Créditos: Dr. Francisco Javier Valles V. | Colab. Lic. Soledad Medina M."
  },

  en: {
    // Nav
    nav_inicio: "Home",
    nav_nosotros: "About Us",
    nav_servicios: "Services",
    nav_catalogos: "Catalogs",
    nav_personal: "Staff",
    nav_directorio: "Directory",
    nav_eventos: "Events",
    nav_formularios: "Forms",

    // Hero
    hero_label: "Campus Juriquilla, Querétaro",
    hero_title: 'Library of<br>Campus <em>Juriquilla</em>',
    hero_desc: "Specialized information unit in Neuroscience, Earth Sciences, Applied Physics and Advanced Technology at the National Autonomous University of Mexico.",
    hero_btn_catalog: "Explore Catalogs",
    hero_btn_more: "Learn more →",
    stat1_num: "14,000+",
    stat1_label: "Book volumes",
    stat2_num: "431",
    stat2_label: "Scientific journal titles",
    stat3_num: "1,300+",
    stat3_label: "Bachelor's to doctoral theses",
    stat4_num: "107",
    stat4_label: "Active subscriptions",

    // Resources band
    res_produccion: "Campus Scientific Output",
    res_boletin: "New Acquisitions Bulletin",
    res_venta: "Book Sales",
    res_reglamento: "Library Rules",
    res_investigadores: "National Researchers 2021",

    // About
    about_label: "About us",
    about_title: "A tradition of<br>scientific knowledge",
    about_p1: "The Campus Juriquilla Library was established on November 24, 2006, by merging the departmental collections of the Institute of Neurobiology, the Geosciences Center, and the Center for Applied Physics and Advanced Technology, becoming a major documentation center for the research units that gave it origin.",
    about_p2: "It is currently located in the Campus Academic Cultural Center building and holds a wide variety of materials: scientific journals, periodical and serial publications, monographic works, maps and multimedia content, available for students, researchers and the general public.",
    coll1_title: "Rafael Lorente de Nó Collection",
    coll1_desc: "Drawings depicting the anatomy of the brain by the renowned physiologist, preserved as part of the library's rich heritage.",
    coll2_title: "Sundial Exhibition",
    coll2_desc: "Permanent exhibition of unique pieces created by Dr. Lothar Max Kuhnert Loske, a specialist in Precision Mechanics and Chronometry.",
    coll3_title: "Areas of Specialization",
    coll3_desc: "Neuroscience, Geosciences, Applied Physics and Advanced Technology, Human Genome, Engineering, Mathematics, and related research fields.",

    // Services
    svc_label: "Our services",
    svc_title: "Everything you need for your research",
    svc_desc: "We offer a wide range of services to support research, teaching, and study activities at Campus Juriquilla.",
    svc1_title: "Collection Development & Technical Processes",
    svc1_desc: "Procurement of bibliographic materials for the Library, and support for researchers and students in acquiring materials for personal use.",
    svc2_title: "Documentation & Specialized Services",
    svc2_desc: "Retrieval of documents requested for research purposes, as well as citation search and review of research published by Campus investigators.",
    svc3_title: "In-Library Loans",
    svc3_desc: "Bibliographic materials required by internal and external users are provided for use within the Library premises.",
    svc4_title: "Interlibrary Loans",
    svc4_desc: "Books and documents are retrieved from other libraries through inter-institutional agreements, exclusively for registered Library personnel.",
    svc5_title: "External Loans",
    svc5_desc: "General collection books, except reference and reserve materials, may be borrowed for off-site use. Exclusively for registered users.",
    svc6_title: "Reference & Guidance",
    svc6_desc: "Guidance for users from within the institution and from other institutions seeking information for their academic and research activities.",
    svc7_title: "Photocopying & Printing",
    svc7_desc: "Photocopying service exclusively for library materials, available as self-service or with staff assistance. Direct text printing is also available.",
    svc8_title: "Document Digitization",
    svc8_desc: "Self-service document and text digitization. Full-text digitization is not permitted in order to protect copyright.",
    svc9_title: "Electronic Services",
    svc9_desc: "Computer workstations for information search and retrieval, academic work, and wireless network access throughout the building.",
    svc10_title: "Other Spaces",
    svc10_desc: "Meeting room, group study cubicles, multimedia room, individual workstations, and an open-air Audiorama with ambient music.",
    svc11_title: "Guided Tours",
    svc11_desc: "Guided tours available for interested groups and institutions. Tours must be scheduled in advance to coordinate the activity.",
    svc12_title: "Wireless Network",
    svc12_desc: "The building offers wireless network access so anyone with a personal device can connect to the Internet.",

    // Catalogs
    cat_label: "Catalogs & Databases",
    cat_title: "Access to global knowledge",
    cat_desc: "Explore our catalogs, international databases, open access journals, and patent registries.",
    tab_catalogs: "Catalogs",
    tab_databases: "Databases",
    tab_journals: "Open Journals",
    tab_geo: "Geosciences",
    tab_patents: "Patents",
    tab_thesis: "Theses",
    cat_bcj: "BCJ Catalog",
    cat_bcj_sub: "Over 14,000 volumes",
    cat_librunam: "LIBRUNAM",
    cat_librunam_sub: "UNAM general catalog",
    cat_seriunam: "SERIUNAM",
    cat_seriunam_sub: "Serial publications",
    cat_tesiunam: "TESIUNAM",
    cat_tesiunam_sub: "UNAM theses",
    cat_digitalab: "DIGITALAB-SSIE",
    cat_digitalab_sub: "Journals with UNAM agreements",
    cat_repo: "Repository",
    cat_repo_sub: "Campus Scientific Output",
    db_ncbi: "NCBI",
    db_ncbi_sub: "National Center for Biotechnology",
    db_wos: "ISI Web of Science",
    db_wos_sub: "Multidisciplinary database",
    db_scopus: "Scopus",
    db_scopus_sub: "Abstracts and citations",
    db_pubmed: "PubMed",
    db_pubmed_sub: "Biomedical sciences",
    db_jcr: "Journal Citation Reports",
    db_jcr_sub: "Impact factor",
    db_ccc: "Current Contents Connect",
    db_ccc_sub: "Bibliographic alerts",
    jr_wiley: "Wiley Open Access",
    jr_wiley_sub: "Open access journals",
    jr_doaj: "DOAJ",
    jr_doaj_sub: "Directory of Open Access Journals",
    jr_elsevier: "Elsevier Open Access",
    jr_elsevier_sub: "Elsevier open journals",
    jr_sd: "ScienceDirect Open Access",
    jr_sd_sub: "ScienceDirect open access",
    jr_omics: "OMICS International",
    jr_omics_sub: "Scientific publications",
    jr_oxford: "Oxford University Press",
    jr_oxford_sub: "Journals",
    geo_uniatmos: "UNIATMOS",
    geo_uniatmos_sub: "Atmospheric Sciences",
    geo_geobase: "GEOBASE",
    geo_geobase_sub: "Geographic database",
    geo_georef: "GEOREF",
    geo_georef_sub: "Geosciences references",
    geo_geomex: "GEOMEX",
    geo_geomex_sub: "Mexican Geology — UNAM",
    geo_mapamex: "MAPAMEX",
    geo_mapamex_sub: "Maps of Mexico — UNAM",
    geo_inspec: "INSPEC",
    geo_inspec_sub: "Physics, electronics, computing",
    pat_canada: "Canadian Intellectual Property Office",
    pat_canada_sub: "Canadian patents",
    pat_fpo: "Free Patents Online",
    pat_fpo_sub: "Free patent search",
    pat_google: "Google Patents",
    pat_google_sub: "Patent search engine",
    pat_wipo: "WIPO",
    pat_wipo_sub: "World Intellectual Property Organization",
    th_cfata: "CFATA",
    th_cfata_sub: "Center for Applied Physics and Advanced Technology",
    th_geo: "Geosciences",
    th_geo_sub: "Geosciences Center",
    th_neuro: "Neurobiology",
    th_neuro_sub: "Institute of Neurobiology",

    // Personal
    per_label: "Our team",
    per_title: "Library Staff",
    per_desc: "A professional team committed to providing the best service to the academic community.",
    role_coord: "Coordination",
    role_dev: "Collection Development & Technical Processes",
    role_doc: "Documentation & Specialized Services",
    role_pub: "Public Services",
    role_jefe: "Head Librarian — Public Services",
    role_bib: "Librarian",
    role_biba: "Librarian",
    role_jefe_sec: "Section Head",
    role_proc: "Technical Processes — Librarian",
    role_foto: "Photocopying & Digitization",
    role_sec: "Secretary",
    role_int: "Maintenance",

    // Directory
    dir_label: "Directory",
    dir_title: "Governing Bodies",
    dir_consejo: "Campus Juriquilla Steering Council",
    dir_comite: "Library Committee",
    dir_mt_role: "Director of the Institute of Neurobiology",
    dir_jp_role: "Director of the Institute of Geosciences",
    dir_jl_role: "Director of the Center for Applied Physics and Advanced Technology",
    dir_rp_role: "Director of ENES-Juriquilla",
    dir_gb_role: "Coordinator of the Juriquilla Academic Unit, Institute of Engineering",
    dir_ml_role: "High Technology Unit, Faculty of Engineering",
    dir_gc_role: "Head of the Multidisciplinary Teaching and Research Unit, Juriquilla",
    dir_do_role: "Institute of Mathematics, Juriquilla Unit",
    dir_ma_role: "International Laboratory for Human Genome Research",
    dir_aa_role: "Coordinator of Administrative Services, Campus Juriquilla",
    dir_fv_role: "Coordinator of the Campus Juriquilla Library",
    dir_tp_role: "Academic Staff Representative of the Library",

    // Events
    evt_label: "Events",
    evt_title: "Activities and presentations",
    evt_desc: "Cultural and academic events organized by the Campus Juriquilla Library.",
    evt1_date: "September 28",
    evt1_type: "Book Presentation",
    evt1_title: "Simple Experiments for a Complicated World",
    evt1_desc: "Presentation of the new edition of the scientific experiment booklets, translated into five languages: Chinese, English, Italian, German, and French. The event was led by Dr. Susana Alaníz, a researcher at the UNAM Geosciences Center.",
    evt2_date: "November 12",
    evt2_type: "Lithographic Exhibition",
    evt2_title: "Fire of a Few Instants: Smoke, Ash… and Lithography",
    evt2_desc: "An exhibition of lithographs by Dr. Laura del Carmen Mayagoitia, featuring cigar label engravings made with lithographic techniques, accompanied by the lecture «YETL ITACATL TETEO» on the ceremonial use of tobacco in pre-Hispanic cultures.",

    // Forms
    frm_label: "Forms",
    frm_title: "Procedures and requests",
    frm_desc: "Download the forms required to access library services.",
    frm1_title: "User Registration",
    frm1_desc: "Form to register as a library user",
    frm2_title: "Document Request",
    frm2_desc: "Request documents via interlibrary loan",
    frm3_title: "Book Purchase",
    frm3_desc: "Request the purchase of bibliographic materials",
    frm4_title: "Library Rules",
    frm4_desc: "Consult the library regulations",
    frm5_title: "Limited Services Protocol",
    frm5_desc: "Current protocol for restricted services",
    frm6_title: "National Emeritus Researchers",
    frm6_desc: "1992-2020 listing from the National Researchers System",

    // Footer
    ft_nav: "Navigation",
    ft_services: "Services",
    ft_resources: "Resources",
    ft_desc: "Specialized information unit in Neuroscience, Earth Sciences, Applied Physics and Advanced Technology at UNAM.",
    ft_prestamos: "Loans",
    ft_consulta: "Reference",
    ft_documentacion: "Documentation",
    ft_fotocopiado: "Photocopying",
    ft_electronicos: "Electronic Services",
    ft_visitas: "Guided Tours",
    ft_reglamento: "Library Rules",
    ft_registro: "User Registration",
    ft_produccion: "Scientific Output",
    ft_investigadores: "National Researchers",
    ft_boletin: "Acquisitions Bulletin",
    ft_copyright: "© UNAM. Campus Juriquilla Library 2009–2024",
    ft_credits: "Credits: Dr. Francisco Javier Valles V. | Collab. Lic. Soledad Medina M."
  }
};


// ─────────────────────────────────────────────
//  i18n ENGINE
// ─────────────────────────────────────────────
let currentLang = 'es';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update all elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });

  // Update lang attribute on html
  document.documentElement.lang = lang;

  // Update active state on lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Save preference
  try { localStorage.setItem('bcj-lang', lang); } catch(e) {}
}

function initLanguage() {
  let saved = null;
  try { saved = localStorage.getItem('bcj-lang'); } catch(e) {}
  setLanguage(saved || 'es');
}


// ─────────────────────────────────────────────
//  NAVBAR SCROLL EFFECT
// ─────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}


// ─────────────────────────────────────────────
//  MOBILE NAVIGATION
// ─────────────────────────────────────────────
function initMobileNav() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}


// ─────────────────────────────────────────────
//  ACTIVE NAV LINK ON SCROLL
// ─────────────────────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  }, { passive: true });
}


// ─────────────────────────────────────────────
//  CATALOG TABS
// ─────────────────────────────────────────────
function initCatalogTabs() {
  const tabs = document.querySelectorAll('.cat-tab');
  const panels = document.querySelectorAll('.cat-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}


// ─────────────────────────────────────────────
//  SCROLL REVEAL
// ─────────────────────────────────────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}


// ─────────────────────────────────────────────
//  BACK TO TOP BUTTON
// ─────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// ─────────────────────────────────────────────
//  STAGGER ANIMATIONS
// ─────────────────────────────────────────────
function initStagger() {
  const grids = document.querySelectorAll(
    '.services-grid, .staff-grid, .cat-grid, .forms-grid, .dir-list, .collections-grid'
  );
  grids.forEach(grid => {
    const items = grid.querySelectorAll('.reveal');
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.08}s`;
    });
  });
}


// ─────────────────────────────────────────────
//  LANGUAGE SWITCH BUTTONS
// ─────────────────────────────────────────────
function initLangSwitchers() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
}


// ─────────────────────────────────────────────
//  INIT EVERYTHING
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initActiveNav();
  initCatalogTabs();
  initScrollReveal();
  initBackToTop();
  initStagger();
  initLangSwitchers();
  initLanguage();
});
