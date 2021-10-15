import { CusBox, CusText, Flex } from 'components/atoms';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { fakerData } from 'utils/mockData';
import { convertToHttps } from 'utils/string';

export const ResentCard = () => {
  const { borderRadii, colors } = useAppTheme();

  return (
    <CusBox height={120} borderRadius="m" flexDirection="row" mb="xl">
      <FastImage
        source={{ uri: convertToHttps(fakerData().random.image()) }}
        style={{ width: 120, height: ' 100%', borderRadius: borderRadii.m, backgroundColor: colors.background }}
      />
      <CusBox flex={1} justifyContent="space-between">
        <CusText variant="pageHead" pl="s" numberOfLines={3} lineHeight={28}>
          {fakerData().lorem.lines(3)}
        </CusText>
        <Flex justifyContent="space-between">
          <CusText variant="body" fontWeight="bold" textTransform="uppercase" color="func500" pl="s" numberOfLines={3}>
            {fakerData().lorem.words(1)}
          </CusText>
          <CusText variant="body" fontWeight="bold" textTransform="uppercase" color="func500" pl="s" numberOfLines={3}>
            {fakerData().date.future().getHours()}h ago
          </CusText>
        </Flex>
      </CusBox>
    </CusBox>
  );
};