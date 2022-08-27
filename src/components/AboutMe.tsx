import { Body1, Divider, Image, Subtitle1, Title1, Title3 } from '@fluentui/react-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const AboutMe = () => {
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    axios
      .get('https://api.linkedin.com/rest/people/(id:nicolas-layne)', {
        headers: { 'X-RestLi-Protocol-Version': '2.0.0' },
      })
      .then((resp) => {
        setProfile(resp.data);
        console.log(profile);
        console.log(resp.data);
      });
  }, []);

  return (
    <div>
      <div>
        <Image src='/Nic&Kim.jpg' alt='Nic & Kim' shape='circular' height={250} width={250} />

        <Divider />

        <Title1 block>Nicolas Layne</Title1>
        <Subtitle1 block>Software Engineer</Subtitle1>
      </div>

      <div>
        <Body1>
          Hey there, nice to meet ya - I&apos;m the friendly neighborhood front-end-specializing software developer! I
          love building and learning about things with a team of equally curious folks - it&apos;s really that simple!
        </Body1>
      </div>

      <div>
        <Title3>Stacks & Skills</Title3>

        <div>
          <div>React</div>
          <div>TypeScript / JavaScript</div>
          <div>Some C#</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
