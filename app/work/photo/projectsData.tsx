import React from 'react';

export type ProjectStructure = {
  [category: string]: {
    [project: string]: {
      images: string[];
      description?: React.ReactNode | (() => React.ReactNode);
    };
  };
};

export const projects: ProjectStructure = {
  Event: {
    "MIT FREDFEST 2022": {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c182dbaa-6718-4d96-8f67-f66c9c0fca24_rw_1920.jpg?h=4b9ca40b2a966d6ba5b5a709e8b53246",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d51dd18a-f563-416f-a939-f778485c46a2_rw_1920.jpg?h=d3bf9b0a59f0cf7fdd66de85e907b678",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ff15415a-3b5e-4a81-9eae-94411e32a464_rw_1920.jpg?h=9156c81c7dc6d4e9e3b4179f9880da8d",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b6078f08-e553-49b2-be0f-7a8be8513b59_rw_1920.jpg?h=b02395c8b56a530a771e4164e5fc6fbe",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8614c309-24de-44d0-b6e8-9ac530e6248c_rw_1920.jpg?h=6d673d3b7db5acefb7510f88b1f039dd",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/09e73c0f-b6ab-47a2-981d-710610b11ec5_rw_1920.jpg?h=5cec3683f45c8465302529ec9f7f7ce7",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ee6a17b3-ab03-4521-bad2-8be3821b6e5b_rw_1920.jpg?h=ce7feb562d9213d788a7f2e1b78f494d",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/fcf2bcf3-382d-4a38-9b09-217d157696d3_rw_1920.jpg?h=2612907ecb508d6fc3d38e657d190844",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/146d4f56-bcff-4ea0-a2b8-10337e44714e_rw_1920.jpg?h=5004cbbc8f06bee55f44635c32e2278a",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ff792e76-b8bf-4ab2-801d-306a79799b3b_rw_1920.jpg?h=b69d10a0c22ba7a1e1dfbcecf9733a1c",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b52b3caa-45b1-4755-8754-73b5b2827e0b_rw_1920.jpg?h=7aa09a43bc18dbadb69406e6505a4194",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6d939b9e-4d3d-45e9-8fbc-fde84ba8c6b6_rw_1920.jpg?h=2d0198d763f91738d447732382062428",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b41f973a-4de9-4787-9310-24edc599c6df_rw_1920.jpg?h=10e1467b9d8cbf115bf3127e2337a915",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/652597d1-b631-4b6e-9469-1b74559b8a9f_rw_1920.jpg?h=6ec2b8e4b917c1b81076f973c6960c32",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1267aed7-57dc-48ce-bb60-bdc292b9f7c3_rw_1920.jpg?h=bc7d6806bbaf78d626679b086eb5bff1",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/19dea52a-3129-483b-94b0-2dadc7cdeb69_rw_1920.jpg?h=8d80c169fb26d3f28368aa3e7f5c1331",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/021e1703-bf85-45f0-ae9d-2a2f47c186fe_rw_1920.jpg?h=53110be333ce2032a7c6f4cf3da311aa",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/4ba2163c-86ba-4db9-9ca5-2fa0b0de16d4_rw_1920.jpg?h=d9d9a70ee12165268db1a1953dbf8428",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/68f4ccc6-2934-4ae8-8be6-31bbd98bd1ef_rw_1920.jpg?h=40d21b06b577fd834c1551752fed11ca",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/46fd6d5c-8ec5-4c29-891f-d95ca1a146c6_rw_1920.jpg?h=c88fb80efe5c2cad6747a8403fe59924",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e7ff25f9-5a84-4880-8431-db1d58e5c31d_rw_1920.jpg?h=4369f732d7791a64d1543b59660de22c",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6508d2cb-5dff-4993-b7c4-04e1d87230fa_rw_1920.jpg?h=e8e936e44cd9250a1398430769cbcbd3",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/416bd4ae-b083-44f4-8f63-5d4aa6e66aff_rw_1920.jpg?h=5ec3aa42e4d047bb3ed28fbfef9a164f",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a3723a24-7515-45fc-bca3-182ae1512157_rw_1920.jpg?h=c89599339ed13dc0ae282fcb40ded1fc",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a35ea15d-4563-4f57-9bcd-0cdbb97dfa58_rw_1920.jpg?h=ad2f9f2b3daefdd24538f5366263dac7",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ce69d214-c9ed-4471-98d7-d38fba96951f_rw_1920.jpg?h=b7ccd022dfda3f72ecec19eeb652f75c",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/7cb6f2a9-5498-4f7d-8e44-ca14a629cd9a_rw_1920.jpg?h=5d6956d17c66aee596f45fb364afb117",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b866797e-6ead-4161-838e-c3f455a512f9_rw_1920.jpg?h=425f9c2a96274a98f680c6ba136dc7a1",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e238f66a-59ab-4a48-83d8-0ea62d28edb4_rw_1920.jpg?h=c68032816b41ca27949b7801cedafd0e",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/9a30ce4f-7aca-40ec-81b4-cec3dfa9e1c9_rw_1920.jpg?h=379934da96a4e8c50057f8d046b1401b",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/46f3a18e-3fe0-4ed8-a3dd-c0fe03a9c2f7_rw_1920.jpg?h=702d017baa86b79691cd62cf64ef26cd",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/91048952-d67a-4562-810d-2f33a25e0c2d_rw_1920.jpg?h=28e60751f8329a475af9334518749129",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/9557144a-9d45-40bf-80d0-185eb082db59_rw_1920.jpg?h=87f1f261536978d8f5c905403010802a",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/9fa04fae-2e6c-4367-9872-c9f627bb7dd9_rw_1920.jpg?h=d5d22d921a8446400bec4b517023ee00",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/5f518272-7cd1-46a2-bbe5-e6c06ff48a52_rw_1920.jpg?h=68f34929457f0e3383283a1964e12c2f",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/58b58a79-cfc9-4788-aab8-568969df322c_rw_1920.jpg?h=5f1ebfe14ac1009962b9bb1d39396521",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/259efed5-81c8-4e2e-92ff-691e69126ee3_rw_1920.jpg?h=36e03790a7d1ce32ff1f303bac8235e8",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ed7e877f-2893-4340-85d9-73d7a02c4d4d_rw_1920.jpg?h=0a9ed5b79970d12a88dfbe909bf63e79",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d390246c-4fca-4e3c-b472-ff55a0d56b52_rw_1920.jpg?h=6e085d69e66e2d5c5056c0142b491faa",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a7651160-289a-4411-b535-12176b7e4e45_rw_1920.jpg?h=bcdce37cc38e707b67fbb51807c09efb",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d6f20a88-60e0-4dbf-bcd6-b266c5f3c479_rw_1920.jpg?h=d53969dcf22b6346abdd1498aee44681",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8035a649-e158-4d4c-ba61-b548aa85b635_rw_1920.jpg?h=72a6efe3df4372f6aefb0239d56fa314",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3b72f09e-f34b-4129-a97b-bfbbaf3c0e77_rw_1920.jpg?h=9b7c62e6178c3aaf66aff904f6df1af4",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/7686ae2f-11d1-4da7-ae17-9c7b28c8f79b_rw_1920.jpg?h=0ff844d64cb34ac1fb1f6077a70573b7",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a66b84cc-f800-4ca6-8f29-63b4bd3f45ba_rw_1920.jpg?h=2df1c440349ec35510ee78f05e7bed57",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2ecad61a-9cb7-4f98-929e-839f84968230_rw_1920.jpg?h=99d61261f46f7fb0c409daf0ce083b09",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/172698be-d300-4ccd-8932-d0dce74e7a89_rw_1920.jpg?h=67680916025b2e02682de5e7a1ffd762",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0557d953-6957-47e2-bfa6-1e0182da0f7b_rw_1920.jpg?h=3e464bce0057ec6dd70b2b8e0e2c0e89",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/4693fe90-1676-4572-9c16-c1f15d33c5be_rw_1920.jpg?h=b8c8daf55b3ffedc8b5cb2fdb45a3c19",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/af22778a-175b-4d04-bdbd-c01b5deacf62_rw_1920.jpg?h=0505fb2110cf3a6d7d0fc11668d866b6",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/42bd58a2-db30-4c91-9175-c5ab86d8fb65_rw_1920.jpg?h=08e8b217e456e62140288563adf5bd37",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/cdb9d986-46e2-438a-b2ba-549c5920c6d2_rw_1920.jpg?h=cfcf3a891abc69b5efa07dfe6f366699",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2450fc4c-3b72-4ba4-96e3-f85a83ff3211_rw_1920.jpg?h=21984a040775adde3d8797bbe6eff5b3",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/fcebbd8a-76d7-4243-b239-e356cee04b26_rw_1920.jpg?h=8ccd602fbb7e5985228583f091731544",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a606e3da-373d-49f4-8a19-03064372b7d1_rw_1920.jpg?h=ee71663a14bc6d87399bdeeccce7fb07",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/69aa4ede-278d-4307-a7cd-6f0fc95166d6_rw_1920.jpg?h=a130198b68e6d0cf20ed537236693750",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3a2f571a-2d5e-400f-ba85-f3040c5bcf90_rw_1920.jpg?h=41daadbb67e2486ffd0bb90fe48ada18",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e10d2975-a4c6-4c89-832b-7a637a160ff9_rw_1920.jpg?h=bb4b5366277188a02cb206ff6bc337ba",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0b3cd936-6673-4772-83e7-9912fdfb19a1_rw_1920.jpg?h=021ef4ec3c0265c9b9edf3ec27cdae4b",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8f274f85-6da7-4450-87d2-fdead1f7f281_rw_1920.jpg?h=747db5ccd6f70882a3df75ff62b56c30",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3317dc7e-4d1e-48b3-90c8-e1d49ca6d6ef_rw_1920.jpg?h=ca824e1b796d622ec95f2f936aad0754",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c7bc9926-8dd3-4eee-8dc0-80d19ea86c80_rw_1920.jpg?h=30b9398bd1bd125d20e8799a7b9cd344",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b366148a-904a-4ca3-8c2d-fdfa2fec7794_rw_1920.jpg?h=3fae62f717f860fb0814875d92a546c0",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/4711c6dc-5f64-4751-b3da-327519709989_rw_1920.jpg?h=b29a6e967d37973d4b40c980884c4f32",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1584c0d9-ebbc-43c0-a959-94032e5d3092_rw_1920.jpg?h=91af51724a9076c059e9f9bcac791ccf",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d1d11329-017d-4aa0-841c-57cbf56c9345_rw_1920.jpg?h=76ef0512a1006fb99f12b42c7fdb98d3",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/f3b4efba-49f9-4093-a8f9-ec2e9c879fec_rw_1920.jpg?h=1bcd95b93aa9110736f617f39d6d68c7",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6af21685-6914-421c-a72b-eeacefe1b658_rw_1920.jpg?h=1f786f912d4d699046d8479bba6acf85",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/eeb4bb31-1348-4a4f-88e1-634b7ab708f8_rw_1920.jpg?h=a9b0fe1a0176a91c64e6c3c0ef1e3081",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/9399ab01-3971-4f89-8c1d-2b9a49340a04_rw_1920.jpg?h=fd0b04923a352dd0553d4eae68ca9482",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8e357ffa-93d9-4568-8601-b64bb1b58ebc_rw_1920.jpg?h=1ba25604e3a44ee3fbd505648c432bc6",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d50ec29b-8cb4-4925-82c3-7c8fa4cff8da_rw_1920.jpg?h=60655549067483b2cd52978228127867",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8f650c2d-e924-4ad6-bbb6-b1ae83336104_rw_1920.jpg?h=823b23db6b33918ca7622d9c5a36affc",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6baa2c80-8e67-4aed-85d2-10a7ba757a1b_rw_1920.jpg?h=bdf1149b3d85ef173bc5ff006e1e3b02",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/17e7fa25-c895-42e7-b021-2997064954e4_rw_1920.jpg?h=f94e55d525f288c397cd05a352c91bbd",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6036fc56-7fa5-438d-8d0a-7f71d95d82a9_rw_1920.jpg?h=a901548caa5b0f15fef0bc6bc6cbb733",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/07cb2cbe-5821-45ab-b7a7-c9cce35a27aa_rw_1920.jpg?h=89df16f2d0e30bdf29edd53430f4e164",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3f8ab922-90e3-4976-a736-906cab26b5c3_rw_1920.jpg?h=a1bf0ed38a5a3e69fb57307bd9df544d",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3b231975-d405-4af8-81ab-f3b9bbbf8fc7_rw_1920.jpg?h=de5df74207b1c1b9e69a93028230082d",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b7a29ef3-23ac-49a5-bbd9-97ecd488514d_rw_1920.jpg?h=11c45a52d1d8b865b082556945b4ff48",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c408e5e1-bced-4501-bdd1-ee0b1eb17b9e_rw_1920.jpg?h=91879889796c36a125b75b49c5d8e5f6",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/fcd54edb-e8d7-42d1-b9b4-3f4339b5ac9f_rw_1920.jpg?h=1a449f1724cfc407508bfde95286ae7e",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b10d794a-8f94-4cfd-ab81-84700460a4e3_rw_1920.jpg?h=df4eac8217bac0fefc242e01fab7d4f1",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b5b17e32-98a8-4fb5-9841-b08b9a60f416_rw_1920.jpg?h=81a8249e82dcac47e391eaf0a8a32904",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ff5efbb6-8633-4853-b742-7db74b94abdf_rw_1920.jpg?h=647b1ed781ed520adbe85d52f283664e",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/22cc2af6-b1fb-475a-b9ff-c45e523505bd_rw_1920.jpg?h=35bb3c4cf26eb0df8b473a8490cbd3cd",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0863a2f1-0912-4e07-9968-b695a51eb220_rw_1920.jpg?h=f6ed346797748c47d1999a935fe86fe8",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3816be0a-b068-4db2-bf0c-76f9f11d5c9f_rw_1920.jpg?h=baf93e7c01f48b86728315a7da418637",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/978b5fbf-b4a0-489d-a2d9-f70c0b41b293_rw_1920.jpg?h=1abf20b5ed5841bea01da3a964d7986d",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c44d1f3f-a1c8-4030-bf16-0cd3f5addb91_rw_1920.jpg?h=a816cb5e4642756cf5f7efaa7bbd43a4",
      ],
    },
  },
  Editorial: {
    '"PUNKY YOUTH" - INFINITE MAGAZINE ISSUE 9 (2020)': {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/41a00321-cd24-4451-b80b-0097e0f42ccf_rw_3840.png?h=9b858d4833c8a78592aedbfc2c823e6e",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/5486bd2a-3aa5-4842-9b88-a69993041ce8_rw_3840.png?h=6d54891721b4a808dc1786f8f324659b",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/5fd1e155-3a7a-4432-b337-59d966bb85bf_rw_3840.png?h=6bb2f89ed6beeb85753d10cf6b47c7df",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6d7d7c0b-414b-4661-8c82-4efe2605a6f9_rw_1200.png?h=4945c3a4918e4b116ef703f35d7d03d1",
      ]
    },
    '"PUNKY YOUTH" - NOT INCLUDED IN FINAL SPREAD (SOLO EDITS)': {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8f4b43cb-04a6-4816-8380-450b0f3d7980_rw_1200.jpg?h=b8b21aafb89dcf4bdcd649047ab1eeb4",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/94032b62-1bee-4ef6-bc3f-3c124ebe2514_rw_3840.jpg?h=59d5616624af851c33022fd3d1b3ccdc",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/95681ba9-9b51-4cc4-bc07-d24506749ed1_rw_3840.jpg?h=0af0889a01fdb2b003cafeb98ebd8fdd",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/03e75685-95ba-4387-9b73-85b413fc8f9e_rw_3840.png?h=9c1cedaab20fe0809d4ee16ef86d1a5f",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0dcc2c56-9c9d-49f3-ba86-f4b57bfa1e3b_rw_3840.jpg?h=77310b61e8f0b90cc47e21e1a8239bf4",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e1131634-ee2c-45f0-b07f-5df9fcc9f747_rw_3840.jpg?h=e26f88110a77b18c4787fd8f23f3edb6",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1ee7cb05-5f9e-4908-97ac-31d0e295e92a_rw_3840.png?h=bab0212aeb610f451afde0433cd599a3",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d1ae0fdf-0420-48c1-923d-6d641dec1af9_rw_3840.png?h=80acd2d778076e934b249126d8f71358",
      ],
    },
    "BLACK COCOON (VERANO 2020)": {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8ed2d0e1-2c76-4959-a22e-811e02b4084f_rw_1200.JPG?h=c6444dcd0b5d44611b8ec144da51aebf",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e95230b4-9d78-4a79-a01f-e67107825abc_rw_1200.png?h=29d050409e1acfe09616b51cfd8f5174",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1b1f9cfb-a704-4509-acf6-1a56a5633f2b_rw_1200.jpg?h=7c7344ca274018d68c7e30b3cf7d7c97",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a09a1861-29b4-40c2-9d22-c55307edd71a_rw_1200.png?h=985079007a4100f095a5310c13e35fb2",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/658896ac-8f80-4b2f-80aa-132a82661655_rw_1200.JPG?h=63b2ffbb672092e21794adad00830cd9",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/25372ad9-1a10-458d-8255-4c504f07cb85_rw_1200.png?h=056ad1919f700d88679f44582027c1ef",
      ],
      description: () => {
        console.log("Description function for TITLE called");
        return (
          <React.Fragment>
            <p>
              These are 3 samples from a series of self-portraits.
              <br />
              As a transmasculine person, dressing femininely, for me, is a radical choice.
              To wear a lacy bra, tight-fitting skirt, translucent top and tights, and vibrant
              makeup and to put butterfly clips in my hair are all acts that I am completely
              averse to in my everyday life but which I wanted to showcase here as an attempt
              to “prove” ownership over my personal gender identity.
              <br />
              It is stating that I can dress femininely and still claim/hold space for myself
              as a trans person. That my clothing does not invalidate my masculinity simply
              because others unaware of my true identity could never fathom the difference
              between the two / may not be aware that my externalized, artistic self-expression
              is not necessarily representative of my inner self.
              <br />
              •  Photos were taken by taping phone to bedroom wall + self-timer.<br />
              •  I chose to utilize overexposure, too, as a play on the idea that, by shining
              enough light onto something, one might be able to reveal its true character /
              shine through surface-level falsities (including, even, the fake freckles I had
              painted on).<br />
              •  Unfortunately, with the amateur equipment I was using&mdash;no control over settings
              nor a way to view the composition while setting up the photo (I just started the
              self-timer and positioned myself as best as I could)&mdash;I don&apos;t believe I managed
              to convey this part of my message very well.
            </p>
          </React.Fragment>
        );
      },
    },
    "THE YOUNGEST DOLL (2019)": {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/54122204-4f6b-4e15-a307-57d51de35c91_rw_1920.jpg?h=31c2490445422d0d1d135bfeff2e01d8",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/fb09682e-996b-4542-841c-d12db25b526a_rw_1920.jpg?h=a6ed387389c0949570b7942360a6a2c6",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/fe446435-63e8-487a-a4d7-2e42ec6c5e88_rw_1920.jpg?h=0926ac2c711aa032d090b0ae8c78aca6",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/85db34f2-4844-490f-a7fa-43ea326992af_rw_1920.jpg?h=75355c8375ca23db7d74c41141e11021",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/899f0476-b808-4126-ad25-59bc22314331_rw_1920.jpg?h=3f3d8a2cba2291db63747f6e17bdbefb",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/757fe503-c6ba-4444-856a-24397cba8173_rw_1920.jpg?h=28b9efdff487cd5e9011536fba2470ee",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b8fef789-33f5-4ffc-9d83-35620b522fd0_rw_1920.jpg?h=fac1b6a228987db675889c655e69ca59",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8c464af8-1cb6-424c-aec7-307f5f68153d_rw_1200.jpg?h=33c2b40f4aca1e7fd899395446418373",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/f9985151-bacb-43b5-96a8-3450b3b92732_rw_1920.jpg?h=895a1b3da6e555e3dd8457624a7206d1",
      ],
    },
  },
  Portrait: {
    "STRETCHING COLOR (2020)": {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0420826f-984d-4db9-b84d-83324abdbcc8_rw_1920.JPG?h=5b791e765c71936e04d8d7a39c34bb08",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/80490a62-fa28-4b63-b685-185ae52bb7de_rw_1920.JPG?h=6df1f0823185c88e134c218e0109c04d",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/460fed7c-d3fc-4c84-90c2-6b157b92989e_rw_1920.jpg?h=f4773caa7b8273aaa8bcea0ecdb4db7e",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/f330307f-605b-4dc9-af3d-9b5e006c0f83_rw_1920.JPG?h=62c6e2be26b6f10237db45dc6a48fd61",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/58a8ffdc-9995-4384-b138-ba04c8a798ef_rw_1920.JPG?h=a377ac42fa3a8632ca357d643af5cf6b",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/f6a5a05d-a0e9-4d4f-9ccf-d45ca3a4bf47_rw_1920.JPG?h=53268c1df872191870855318c20fd2da",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/95bc256b-9203-4bac-9dff-4d9084165ba7_rw_1920.JPG?h=d32c9021dcf9f48e59fd2ba0afea1663",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a2069cfa-3254-4f77-9eba-2bb0dafaed5a_rw_1920.JPG?h=92bc28ab6ab2c6a15c6fa766d1d8b0ab",
      ],
    },
    "MISC. SELF-TIMER (2020)": {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ac323ab0-8676-499f-bb41-5ac6e1d934c9_rw_1920.JPG?h=45e606e185f38b507100482770c72992",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2e074b9e-b84f-460c-9af3-d0420fabc3f1_rw_1920.JPG?h=154053733044e99b36d8cbdfff04f2ef",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ee7d0dbb-c82d-414c-8943-ac5c6de56c02_rw_1920.JPG?h=e345883a40dcb630d32340584bd504f8",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/428d9a55-b907-42bb-aaf7-151364152812_rw_1920.JPG?h=fe074326ad45e749cd350a696a1db901",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8a37a8d8-3352-41fa-ad5d-3394ee3cbcff_rw_1920.JPG?h=93caad8e9b5f917946dc7ca60f897554",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/4f38beb9-b085-40b7-be2d-0c00a658d720_rw_1920.JPG?h=979d745a2ee9f64628c465d1597a3d66",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8cd9fb15-87a6-4154-b69a-c1d107c62851_rw_1920.JPG?h=7088872033b2091cad133710b5f8ca6b",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6d625a49-5dd9-40ee-9e38-12624a964f25_rw_1920.JPG?h=ffc1513dcb97fdcd398783b28003d47a",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d4fa2979-60db-48ea-b968-54c17b75b808_rw_1920.JPG?h=0e4c16e346bb0f6c0bdaee53e8a8566c",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0afbd20a-b38f-4fff-aaa7-94a43da0751a_rw_1920.jpg?h=c7f8273686ad936fedf4390ad1f55404",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/43a6d553-6143-41ec-86c8-6cf94520559d_rw_1920.JPG?h=aeb4412a09b84d61d84530f43f54f60f",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/05fc57de-f79a-4c0c-a4aa-43b93e3ea1bf_rw_1200.JPG?h=704034a269193516627658331f2efe0f",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a6a7a83a-4f8a-40aa-b269-ea009f9f717e_rw_1920.jpg?h=4e3311f4215bfaf06cf3871ddbfc7016",
      ],
    },
    "NOSTALGIA (PHOTOGRAPHED 2019, EDITED 2020)": {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/325e5e03-6d40-47ea-b5c2-8a5a91fe4d99_rw_1920.JPG?h=1774832c42cf6d9bc9c6029f4de10679",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/cba799e7-142a-418c-a169-7c85310b467c_rw_1920.JPG?h=28d019e74f4ed7061c3ea3d8552517f7",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/82daed4d-4cd7-405f-8529-78d18db1b1f3_rw_1920.JPG?h=a5435f942767dd1d3617ca3223734c9b",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/189fa33c-7e07-4bc4-9933-3097442dbbd1_rw_1920.JPG?h=a09490efa8ed19beeef58e23a08870de",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2de13396-79c8-4f3b-930d-51cc073c5087_rw_1920.JPG?h=c072e274ed64d01ebaf061f732d911f4",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c40a65cd-6860-406a-aa6e-03c842207ef6_rw_1200.JPG?h=448baa37752b62ff2151e3a8e0ee422d",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/939e9873-a0f3-4f14-926f-daaaa4d30fb1_rw_1200.JPG?h=d5a6fd6d451fad2944515f937e56d41e",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/078b836e-62a5-4d75-8b70-a3fe55f74917_rw_1920.JPG?h=cb46745ae19a7573c7d7d251c6abde68",
      ],
    },
    "INITIAL EXPERIMENTATIONS WITH FILM PHOTOGRAPHY (35MM DISPOSABLE CAMERA) - 2017, 2018":
      {
        images: [
          "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b4547768-ccce-4477-a29b-4c32c7ed8899_rw_1920.jpg?h=7911eb3d4ec6e4729b6fac2461c61dc3",
          "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/df641360-588d-497c-b744-000f8d7c320d_rw_1920.jpg?h=57a3bedd1e17dd708a5205e6f70cae2a",
        ],
      },
  },
  Street: {
    "YBOR (JANUARY 2020)": {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8c2e947d-b373-4c2e-b895-a21daaceee02_rw_1920.jpg?h=9e52e6e7ad64c1988035510cdebb0113",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/268ba31f-eee4-4bdb-ad4b-5ede8091acee_rw_1920.jpg?h=b48017ca26798d5b9a475aeb876d16d5",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6feb0345-a31f-4e9e-aa58-42ca05f3cc82_rw_1920.jpg?h=bec066b98d1876b40be6a1ef817ff885",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/48822133-ef41-41cd-a864-db4bbfc97582_rw_1920.jpg?h=e43da4beaf95d04a5bfb6a750c16ad4b",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0f1e6c1d-a45b-469a-b246-689bd7d963a3_rw_1920.jpg?h=0623c48624685f9d8b239309f01c740c",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c32e705c-59fb-4323-88c8-4e3bf99e56a6_rw_1920.jpg?h=577ee8d28d9507783fec7be9e91ae55b",
      ],
    },
  },
  "Corrective Edits": {
    "MASK REMOVAL": {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/9343b568-f71e-4384-88ff-b4f9821579bb_rw_1200.png?h=1880e131885a9f73f9ba05bf33db8239",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/bb45e277-2d0f-47ce-98aa-0310e67e14ed_rw_1200.jpeg?h=cf9611e27dd52388042c38bb3a0260bd",
      ],
    },
    "CAR REMOVAL": {
      images: [
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a64fde98-5369-444a-b359-959c371b54ad_rw_1920.JPG?h=922ae9ad3dd8bc9fca55b3285096528e",
        "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/cca6a4d6-fe4c-4fb8-9f44-975fd24ff7ac_rw_1920.png?h=f085383f8316a8ebbe742da5d4fd775b",
      ],
    },
  },
};

export const backgroundImages = [
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ee6a17b3-ab03-4521-bad2-8be3821b6e5b_rw_1920.jpg?h=ce7feb562d9213d788a7f2e1b78f494d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/fcf2bcf3-382d-4a38-9b09-217d157696d3_rw_1920.jpg?h=2612907ecb508d6fc3d38e657d190844",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b41f973a-4de9-4787-9310-24edc599c6df_rw_1920.jpg?h=10e1467b9d8cbf115bf3127e2337a915",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/19dea52a-3129-483b-94b0-2dadc7cdeb69_rw_1920.jpg?h=8d80c169fb26d3f28368aa3e7f5c1331",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a3723a24-7515-45fc-bca3-182ae1512157_rw_1920.jpg?h=c89599339ed13dc0ae282fcb40ded1fc",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/7cb6f2a9-5498-4f7d-8e44-ca14a629cd9a_rw_1920.jpg?h=5d6956d17c66aee596f45fb364afb117",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e238f66a-59ab-4a48-83d8-0ea62d28edb4_rw_1920.jpg?h=c68032816b41ca27949b7801cedafd0e",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/91048952-d67a-4562-810d-2f33a25e0c2d_rw_1920.jpg?h=28e60751f8329a475af9334518749129",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/9557144a-9d45-40bf-80d0-185eb082db59_rw_1920.jpg?h=87f1f261536978d8f5c905403010802a",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/5f518272-7cd1-46a2-bbe5-e6c06ff48a52_rw_1920.jpg?h=68f34929457f0e3383283a1964e12c2f",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d6f20a88-60e0-4dbf-bcd6-b266c5f3c479_rw_1920.jpg?h=d53969dcf22b6346abdd1498aee44681",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3b72f09e-f34b-4129-a97b-bfbbaf3c0e77_rw_1920.jpg?h=9b7c62e6178c3aaf66aff904f6df1af4",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0557d953-6957-47e2-bfa6-1e0182da0f7b_rw_1920.jpg?h=3e464bce0057ec6dd70b2b8e0e2c0e89",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/4693fe90-1676-4572-9c16-c1f15d33c5be_rw_1920.jpg?h=b8c8daf55b3ffedc8b5cb2fdb45a3c19",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2450fc4c-3b72-4ba4-96e3-f85a83ff3211_rw_1920.jpg?h=21984a040775adde3d8797bbe6eff5b3",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c7bc9926-8dd3-4eee-8dc0-80d19ea86c80_rw_1920.jpg?h=30b9398bd1bd125d20e8799a7b9cd344",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/4711c6dc-5f64-4751-b3da-327519709989_rw_1920.jpg?h=b29a6e967d37973d4b40c980884c4f32",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6af21685-6914-421c-a72b-eeacefe1b658_rw_1920.jpg?h=1f786f912d4d699046d8479bba6acf85",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8e357ffa-93d9-4568-8601-b64bb1b58ebc_rw_1920.jpg?h=1ba25604e3a44ee3fbd505648c432bc6",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8f650c2d-e924-4ad6-bbb6-b1ae83336104_rw_1920.jpg?h=823b23db6b33918ca7622d9c5a36affc",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6036fc56-7fa5-438d-8d0a-7f71d95d82a9_rw_1920.jpg?h=a901548caa5b0f15fef0bc6bc6cbb733",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/07cb2cbe-5821-45ab-b7a7-c9cce35a27aa_rw_1920.jpg?h=89df16f2d0e30bdf29edd53430f4e164",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3f8ab922-90e3-4976-a736-906cab26b5c3_rw_1920.jpg?h=a1bf0ed38a5a3e69fb57307bd9df544d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b7a29ef3-23ac-49a5-bbd9-97ecd488514d_rw_1920.jpg?h=11c45a52d1d8b865b082556945b4ff48",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b5b17e32-98a8-4fb5-9841-b08b9a60f416_rw_1920.jpg?h=81a8249e82dcac47e391eaf0a8a32904",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ff5efbb6-8633-4853-b742-7db74b94abdf_rw_1920.jpg?h=647b1ed781ed520adbe85d52f283664e",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/41a00321-cd24-4451-b80b-0097e0f42ccf_rw_3840.png?h=9b858d4833c8a78592aedbfc2c823e6e",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/5486bd2a-3aa5-4842-9b88-a69993041ce8_rw_3840.png?h=6d54891721b4a808dc1786f8f324659b",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/5fd1e155-3a7a-4432-b337-59d966bb85bf.png?h=bf6537583050871a420bb0836dfe9d2d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8f4b43cb-04a6-4816-8380-450b0f3d7980_rw_1200.jpg?h=b8b21aafb89dcf4bdcd649047ab1eeb4",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/94032b62-1bee-4ef6-bc3f-3c124ebe2514_rw_3840.jpg?h=59d5616624af851c33022fd3d1b3ccdc",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/95681ba9-9b51-4cc4-bc07-d24506749ed1_rw_3840.jpg?h=0af0889a01fdb2b003cafeb98ebd8fdd",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/03e75685-95ba-4387-9b73-85b413fc8f9e_rw_3840.png?h=9c1cedaab20fe0809d4ee16ef86d1a5f",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0dcc2c56-9c9d-49f3-ba86-f4b57bfa1e3b_rw_3840.jpg?h=77310b61e8f0b90cc47e21e1a8239bf4",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e1131634-ee2c-45f0-b07f-5df9fcc9f747_rw_3840.jpg?h=e26f88110a77b18c4787fd8f23f3edb6",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1ee7cb05-5f9e-4908-97ac-31d0e295e92a_rw_3840.png?h=bab0212aeb610f451afde0433cd599a3",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d1ae0fdf-0420-48c1-923d-6d641dec1af9_rw_3840.png?h=80acd2d778076e934b249126d8f71358",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0420826f-984d-4db9-b84d-83324abdbcc8_rw_1920.JPG?h=5b791e765c71936e04d8d7a39c34bb08",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/80490a62-fa28-4b63-b685-185ae52bb7de_rw_1920.JPG?h=6df1f0823185c88e134c218e0109c04d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/80490a62-fa28-4b63-b685-185ae52bb7de_rw_1920.JPG?h=6df1f0823185c88e134c218e0109c04d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/f330307f-605b-4dc9-af3d-9b5e006c0f83_rw_1920.JPG?h=62c6e2be26b6f10237db45dc6a48fd61",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/43a6d553-6143-41ec-86c8-6cf94520559d_rw_1920.JPG?h=aeb4412a09b84d61d84530f43f54f60f",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8ed2d0e1-2c76-4959-a22e-811e02b4084f_rw_1200.JPG?h=c6444dcd0b5d44611b8ec144da51aebf",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1b1f9cfb-a704-4509-acf6-1a56a5633f2b_rw_1200.jpg?h=7c7344ca274018d68c7e30b3cf7d7c97",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/658896ac-8f80-4b2f-80aa-132a82661655_rw_1200.JPG?h=63b2ffbb672092e21794adad00830cd9",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8c2e947d-b373-4c2e-b895-a21daaceee02_rw_1920.jpg?h=9e52e6e7ad64c1988035510cdebb0113",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0f1e6c1d-a45b-469a-b246-689bd7d963a3_rw_1920.jpg?h=0623c48624685f9d8b239309f01c740c",
];
