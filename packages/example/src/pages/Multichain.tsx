import React from 'react'
import { Container, MainContent, Section, SectionRow } from '../components/base/base'
import { Mainnet, Optimism } from '@usedapp/core'
import { ChainState } from '../components/ChainState'
import { Title } from '../typography/Title'
import styled from 'styled-components'

const chains = [Mainnet.chainId, Optimism.chainId]

export const Multichain = () => {
  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Multichain</Title>
          </SectionRow>
          <BlockContainer>
            {chains.map((chainId) => (
              <ChainState key={chainId} chainId={chainId} />
            ))}
          </BlockContainer>
        </Section>
      </Container>
    </MainContent>
  )
}

const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
